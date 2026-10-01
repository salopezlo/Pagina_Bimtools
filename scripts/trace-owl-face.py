"""Calca static/img/owl-eyebrow-reference.png a vector (potrace) y escribe
src/components/Brand/owlFacePath.js.

Ejecutar desde la raíz del repo. Requiere: pip install pillow numpy potracer

Capas (coordenadas = píxeles del PNG, 130×77):
  face    cejas + puente + pico (todo lo que queda fuera de los discos de los ojos)
  ringL/R anillo de cada ojo
  pupL/R  pupila de cada ojo (el brillo queda como hueco)
"""
import json
import numpy as np, potrace
from PIL import Image

SRC = 'static/img/owl-eyebrow-reference.png'
OUT = 'src/components/Brand/owlFacePath.js'
K = 8
# Anillos de la referencia: ajuste de círculo al borde exterior (residuo < 0.15 px), r exterior 21.53
RINGS = {'L': (46.34, 42.93), 'R': (92.65, 42.71)}
R_OUT = 21.55      # borde exterior del anillo
R_PUPIL = 13.5     # separa pupila (r<13.5) de anillo (r>16.2)
R_FACE_CUT = 21.0  # la cara omite los discos de los ojos; las O doradas cubren el resto

im = Image.open(SRC).convert('L')
W, H = im.size
a = np.asarray(im.resize((W * K, H * K), Image.LANCZOS), dtype=float)
ys, xs = np.mgrid[0:H * K, 0:W * K]
X = (xs + 0.5) / K
Y = (ys + 0.5) / K
ink = a < 128


def dist(c):
    return np.hypot(X - c[0], Y - c[1])


def trace(mask):
    pl = potrace.Bitmap(~mask).trace(turdsize=20, alphamax=1.0, opticurve=True, opttolerance=0.2)
    f = lambda p: '%.2f %.2f' % (p.x / K, p.y / K)
    out = []
    for c in pl:
        d = 'M' + f(c.start_point)
        for s in c.segments:
            d += ('L' + f(s.c) + 'L' + f(s.end_point)) if s.is_corner else \
                 ('C' + f(s.c1) + ' ' + f(s.c2) + ' ' + f(s.end_point))
        out.append(d + 'Z')
    return ''.join(out)


layers = {}
face = ink.copy()
for k, c in RINGS.items():
    r = dist(c)
    layers['ring' + k] = trace(ink & (r < R_OUT) & (r > R_PUPIL))
    layers['pup' + k] = trace(ink & (r <= R_PUPIL))
    face &= ~(r < R_FACE_CUT)
layers['face'] = trace(face)

with open(OUT, 'w') as fh:
    fh.write('// Calcado de static/img/owl-eyebrow-reference.png (130×77 px) con scripts/trace-owl-face.py.\n')
    fh.write('// No editar a mano. Coordenadas = píxeles del PNG.\n')
    fh.write('export const OWL_RINGS = ' + json.dumps({k: list(v) for k, v in RINGS.items()}) + ';\n')
    fh.write('export const OWL_RING_RADIUS = %s;\n' % R_OUT)
    fh.write('export const OWL_PATHS = {\n')
    for k, v in layers.items():
        fh.write("  %s:\n    '%s',\n" % (k, v))
    fh.write('};\n')
print({k: len(v) for k, v in layers.items()})
