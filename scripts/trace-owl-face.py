import numpy as np, potrace
from PIL import Image
SRC='static/img/owl-eyebrow-reference.png'  # ejecutar desde la raíz del repo; requiere: pip install pillow numpy potracer
im=Image.open(SRC).convert('L')
W,H=im.size
K=8
a=np.asarray(im.resize((W*K,H*K),Image.LANCZOS),dtype=float)
ys,xs=np.mgrid[0:H*K,0:W*K]
X=(xs+0.5)/K; Y=(ys+0.5)/K
# Anillos de la referencia (ajuste de círculo al borde exterior, residuo < 0.15 px): r=21.53
RINGS=((46.34,42.93),(92.65,42.71))
R_CUT=21.0  # las O doradas (r exterior 21.53) cubren el resto del anillo
mask=np.zeros_like(a,bool)
for cx,cy in RINGS:
    mask|=((X-cx)**2+(Y-cy)**2)<R_CUT**2
ink=(a<128)&~mask
bm=potrace.Bitmap(~ink)
pl=bm.trace(turdsize=20,alphamax=1.0,opticurve=True,opttolerance=0.2)
parts=[]
f=lambda p:'%.2f %.2f'%(p.x/K,p.y/K)
for c in pl:
    d='M'+f(c.start_point)
    for s in c.segments:
        if s.is_corner: d+='L'+f(s.c)+'L'+f(s.end_point)
        else: d+='C'+f(s.c1)+' '+f(s.c2)+' '+f(s.end_point)
    parts.append(d+'Z')
d=''.join(parts)
open('face_path.txt','w').write(d)  # pegar en src/components/Brand/owlFacePath.js
print(len(parts),'curves',len(d),'chars')

