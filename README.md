# BIMTOOLS — Sitio de documentación

Documentación de la suite BIMTOOLS para Revit, organizada por el orden en que se usan las herramientas en un proyecto. Construido con [Docusaurus](https://docusaurus.io/). El contexto y el alcance están en [`PRD-BIMTOOLS-sitio-documentacion.md`](PRD-BIMTOOLS-sitio-documentacion.md).

## Requisitos

- Node.js 20 o superior

## Uso local

```bash
npm install
npm start        # servidor de desarrollo en http://localhost:3000
npm run build    # genera el sitio estático en build/
npm run serve    # sirve build/ para probarlo
```

## Estructura

| Ruta | Qué contiene |
|---|---|
| `docs/` | Las páginas, una carpeta por etapa del flujo (`01-preparar-proyecto` … `05-entregar`) y `utilidades/` |
| `docs/_plantilla-herramienta.md` | Plantilla para páginas nuevas (no se publica) |
| `src/pages/index.js` | Home |
| `src/components/Brand/` | Wordmark BIMTOOLS con las "O" como ojos de búho |
| `src/theme/` | Componentes de Docusaurus personalizados (navbar y layout de herramienta) |
| `src/css/custom.css` | Paleta (fondo `#1A1A1A`, acento `#F5A800`) y estilos globales |
| `static/img/` | Logo provisional y la imagen de referencia del búho |
| `scripts/trace-owl-face.py` | Genera los trazados vectoriales del búho a partir del PNG de referencia |

## Escribir una página de herramienta

1. Copiar `docs/_plantilla-herramienta.md` a `docs/<etapa>/NN-nombre.md`.
2. Completar las seis secciones: Qué hace, Cuándo usarla, Cómo se usa, Requisitos, Limitaciones y Estado.
3. Opcional: añadir `estado: Disponible | En desarrollo | Planeado` en el encabezado del archivo.

## Despliegue (Netlify)

La configuración está en `netlify.toml` (comando `npm run build`, carpeta `build`, Node 20). Mientras el sitio no sea público se envía la cabecera `X-Robots-Tag: noindex` y `noIndex: true` en `docusaurus.config.js`; quitar ambos al publicar.
