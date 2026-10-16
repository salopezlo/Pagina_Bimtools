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

## Despliegue privado en Cloudflare (Pages + Access)

El sitio **no debe ser público hasta el lanzamiento**. Hay dos capas: `noindex` (ya incluido en el repo) y **Cloudflare Access**, que es la que realmente impide ver el sitio sin iniciar sesión. Solo `noindex` **no** es protección: el enlace sigue abierto para quien lo tenga.

> **Qué está verificado y qué no.** Los datos marcados con ✅ salen de la documentación oficial de Cloudflare, consultada a través de un buscador (mi entorno no pudo abrir `developers.cloudflare.com` directamente). Los marcados con ⚠️ **no pude verificar** contra la documentación oficial: confírmalos en pantalla, porque la interfaz de Cloudflare cambia. No hay ninguna clave ni token en este repo y no hace falta ninguno para estos pasos.

### 1. Conectar el repo (Pages)

1. ✅ En el panel de Cloudflare: **Workers & Pages** → crear un proyecto de **Pages** → conectar con Git y elegir el repositorio. ⚠️ Los nombres exactos de los botones pueden variar.
2. ✅ Preset de framework **Docusaurus** (rellena solo los dos valores siguientes):
   - **Comando de build:** `npm run build`
   - **Directorio de salida:** `build`
   - **Rama de producción:** `main` (valor por defecto)
3. ✅ Node: el archivo `.node-version` del repo fija la versión. También se puede fijar con la variable de entorno `NODE_VERSION`. ⚠️ Que Cloudflare acepte exactamente `22` (sin parche) no lo verifiqué; si el build se queja de la versión, define `NODE_VERSION` con una versión completa.
4. ⚠️ Variable opcional `SITE_URL` con la URL final; si no se define, `docusaurus.config.js` usa `CF_PAGES_URL`, variable que Cloudflare debería definir al compilar (no verificado). Solo afecta a enlaces canónicos y al mapa del sitio.

### 2. No indexar (ya hecho en el repo)

`static/_headers` envía `X-Robots-Tag: noindex, nofollow` en todas las rutas, y `noIndex: true` en `docusaurus.config.js` añade la etiqueta equivalente. ✅ Cloudflare Pages lee `_headers` y ya marca como noindex las versiones de prueba (preview) por su cuenta.

### 3. Proteger con Cloudflare Access (solo tus correos)

Importante ✅: el interruptor **Settings → General → Enable access policy** del proyecto de Pages protege **solo las versiones de prueba (preview)**. **No protege** el dominio de producción `proyecto.pages.dev` ni un dominio propio. Para el sitio principal hay que crear una aplicación de Access propia:

1. ⚠️ En el panel de Cloudflare entra a **Zero Trust** (puede pedir crear una cuenta de Zero Trust; el plan gratuito debería bastar, y la guía que consulté habla de hasta 50 usuarios, pero **no lo pude confirmar en la página oficial de precios**).
2. ⚠️ **Access → Applications → Add an application → Self-hosted**. Como dominio público pon `proyecto.pages.dev` (tu nombre real de proyecto). Para cubrir también las versiones de prueba, añade `*.proyecto.pages.dev`.
3. ⚠️ Crea una política con acción **Allow** y regla **Emails** (Include → Emails) con **solo las direcciones que tú agregues**. Access deniega por defecto a quien no coincida con una política.
4. ⚠️ Método de inicio de sesión: **One-time PIN** (llega un código al correo; el destinatario no necesita cuenta de Cloudflare).
5. ✅ La documentación de Cloudflare también describe un camino alternativo: activar **Enable access policy** en el proyecto y luego editar la aplicación de Access que Pages crea, quitando el comodín del campo **Subdomain** para que cubra el dominio `pages.dev`. Si más adelante usas un dominio propio, ese necesita su **propia** aplicación de Access.
6. **Comprueba siempre**: abre el enlace en una ventana de incógnito. Debe pedir inicio de sesión antes de mostrar nada. Si muestra el sitio, no está protegido.

### 4. Al lanzar

Borrar `static/_headers` y la línea `noIndex: true` de `docusaurus.config.js`, y quitar o abrir la política de Access.

> `netlify.toml` queda solo por si se vuelve a usar Netlify; Cloudflare no lo lee.
