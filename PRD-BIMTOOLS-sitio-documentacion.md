# PRD — BIMTOOLS: Sitio de Documentación
**Versión:** 1.0
**Fecha:** Octubre 2026
**Autor:** Santi
**Estado:** Aprobado para fase 1 (esqueleto) — fase 2 (diseño a medida) pendiente de fase 1

---

## 0. Qué es esto y por qué existe

BIMTOOLS es la suite comercial de addins para Revit 2023 que Santi está construyendo (ver `PRD-BIMTools.md`, `CMP-Revit-proyecto.md`, `SETUP-cowork-workspace.md` en el repo de contexto). Ya existen 19 plugins en distintos estados de madurez. No hay ningún sitio público ni interno que explique qué hace cada uno, en qué orden usarlos, ni cómo se instalan.

**Este PRD es solo para el sitio de documentación**, no para los plugins en sí. El sitio no construye ni modifica el addin — lo documenta y lo presenta como producto.

**No sale al mercado hasta que todo el addin esté listo.** Hasta entonces, el sitio puede vivir en un repo privado y en un dominio no público (Netlify permite esto sin costo).

---

## 1. Problema

Para vender BIMTOOLS como producto, un arquitecto o ingeniero BIM que llegue al sitio necesita entender en minutos:
- Qué hace cada herramienta
- En qué orden del flujo de trabajo de Revit se usa
- Qué requisitos tiene (versión de Revit, licencia)
- Verla funcionar (captura o GIF real)

Hoy nada de esto existe en ningún lugar accesible.

---

## 2. Objetivo

Un sitio de documentación construido sobre **Docusaurus** (generador estático de Meta, el mismo motor que usa `tools.nonica.io`), con **diseño visual a medida** sobre esa base — no una plantilla genérica. El sitio organiza las herramientas **por orden del flujo de trabajo de Revit**, no por categoría técnica, lo cual es una diferencia deliberada frente a Nonica.

---

## 3. Identidad visual

| Elemento | Valor |
|---|---|
| Nombre del sitio | **BIMTOOLS** |
| Detalle de marca | Las dos letras "O" de BIMTOOLS se estilizan como ojos de búho en el logo |
| Color primario (dorado) | `#F5A800` |
| Color de fondo (negro) | `#1A1A1A` |
| Tema | Oscuro |

> Nota: el PRD original del addin (`PRD-BIMTools.md` sección 6) describe un esquema de color distinto (fondo claro `#F5F5F5`, azul `#1565C0`, dorado hover `#FFBF00`) para la UI de los plugins en WPF. **Ese esquema es el de las ventanas del addin dentro de Revit — no es el del sitio web.** El sitio usa el esquema negro/dorado confirmado en esta conversación. No mezclar ambos sin confirmar con Santi.

---

## 4. Por qué Docusaurus (no HTML a medida desde cero, no plantilla sin tocar)

Docusaurus resuelve de fábrica: ruteo, buscador, estructura de navegación lateral, compilación a sitio estático, versionado de contenido. Construir eso desde cero en HTML plano sería reinventar algo ya resuelto.

El diseño visual **sí es a medida**, encima del motor:
- Variables CSS (Infima, el sistema de estilos de Docusaurus) para la paleta de colores y tipografía.
- "Swizzling" de componentes de React específicos (home, header, layout de página de herramienta) cuando el tema por defecto no alcance.

No es "plantilla genérica" ni "todo desde cero" — es motor compartido, diseño propio.

---

## 5. Estructura de contenido — flujo de trabajo numerado

A diferencia de Nonica (organizado por categoría técnica), BIMTOOLS se organiza **por el orden en que se usan las herramientas en un proyecto real de Revit**. Esto es borrador — se reorganiza con uso real antes de tocar la numeración física del ribbon en Revit (ver sección 8).

### Etapa 1 — Preparar el proyecto
1. **Carpetas / organización de planos** — ⚠️ **PENDIENTE DE CONFIRMAR CUÁL SISTEMA ES EL VIGENTE** (ver sección 7, pregunta abierta #1)
2. Nomenclatura de familias y tipos — plugin `NamingChecker`, pestaña Familias/Tipos
3. Plantillas de vista — plugins `TransferirPlantillas` / `GestorPlantillas`

### Etapa 2 — Modelar
4. Techos por habitación — plugin `CrearTechos` (`GenerateCeilingPlugin`)
5. Alzados por habitación — plugin `AlzadosHabitacion` (`PluginAlzadosHabitacion`)

### Etapa 3 — Documentar
6. Numeración de vértices con directriz — `Creacion de areas_Plugin` (incompleto: falta `AddLeader()`, ver `PRD-BIMTools.md` sección 0)
7. Coordenadas — `Plugin revit coordenadas` (`CoordPlugin`)
8. Cotas automáticas (sistema 4 capas) — `AutoDimensiones`
9. Leyendas de puertas y ventanas — `LegendWindowsPlugin` — ⚠️ **estado contradictorio**: el registro de plugins lo marca "Funcional", pero el PRD del addin (sección 18) dice que el primer test del approach vigente (M3 within-doc) **aún no se ha ejecutado**. No documentar como "disponible" hasta confirmar el test.

### Etapa 4 — Cuantificar
10. Tablas de cantidades — `ScheduleGenerator` dentro de `PresupuestoBIM`, lee prefijos de `naming-rules.json`
11. Presupuesto — `PresupuestoBIM`
12. Dashboard de volúmenes/estructuras — `BIMTools_Dashboard`, tab "Estructuras"

### Etapa 5 — Entregar
13. Exportar planos (PDF/DWG) con auditoría de carpetas — dentro de `BIMTools_MCPServer`

### Utilidades sin número de flujo (uso puntual, no secuencial)
- `ImportarExcel` (`RevitExcelImporter`) — función exacta sin confirmar en los documentos revisados
- `ColoreadorBIM` — función exacta sin confirmar
- `RotarCaja` — función exacta sin confirmar
- `ImageToDetail` — convierte imágenes a líneas de detalle vía Gemini Vision
- `BIMTools.Auth` — no es una herramienta de usuario, es la DLL compartida de licenciamiento

> Las tres marcadas "sin confirmar" necesitan que Santi las describa antes de escribir su página — Claude Code no debe inventar su función.

---

## 6. Scope de la fase 1 (esqueleto)

**Dentro:**
- Proyecto Docusaurus inicializado en un repo nuevo de GitHub
- Tema oscuro con la paleta negro `#1A1A1A` / dorado `#F5A800`
- Estructura de carpetas de documentación siguiendo las 5 etapas de la sección 5 (contenido placeholder, sin texto final todavía)
- Deploy funcional en Netlify (puede ser sitio no público / solo con link)

**Fuera (fase 2 o después):**
- Diseño a medida de home, header con logo de búho, layout de página de herramienta (fase 2, sesión separada)
- Contenido real de cada página (texto, capturas, GIFs) — depende de que Santi los aporte
- Sistema de cobro/licencias en el sitio
- Documentación del conector MCP con IA

---

## 7. Preguntas abiertas — resolver antes de escribir contenido real

1. **¿Cuál sistema de parámetros de organización de carpetas es el vigente?**
   - Opción A: `NamingChecker` → pestaña Planos y Vistas → parámetros `01_Disciplina`, `02_Zona`, `03_Especialidad` (documentado en `PRD-BIMTools.md` sección 16 y 19)
   - Opción B: diálogo de `BIMTools_MCPServer` → "Crear parámetros de organización de planos" → campos `Disciplina`, `Tipo de Plano`, `Subgrupo` (visto en captura de pantalla)
   - Son nombres de campo distintos para lo que parece ser el mismo propósito. Puede que uno haya reemplazado al otro, o que convivan por error. **Bloquea la página 1 de la Etapa 1.**

2. ¿`ImportarExcel`, `ColoreadorBIM` y `RotarCaja` entran en el flujo numerado o quedan como utilidades sueltas permanentemente? Depende de qué hacen exactamente.

3. ¿Se etiqueta cada página con estado (Disponible / En desarrollo / Planeado) desde ya, aunque el sitio sea privado? Recomendado para no perder de vista qué falta, aunque nadie externo lo vea todavía.

---

## 8. Advertencia — no tocar el ribbon de Revit todavía

La numeración de este sitio es un borrador de contenido, fácil de reordenar (es editar números en archivos Markdown). **La numeración física de los botones en el ribbon de Revit es otra cosa** — una vez escrita en `App.cs` con íconos y posición, reordenarla cuesta más. No aplicar este orden al ribbon real hasta validarlo con uso diario en un proyecto activo.

---

## 9. Plan de implementación (vía Claude Code, sesiones en la nube)

| Fase | Qué hace | Entregable |
|---|---|---|
| 1 | Scaffold de Docusaurus + tema oscuro + paleta base | PR con proyecto corriendo localmente |
| 2 | Diseño a medida: home, header con logo búho, layout de página de herramienta | PR sobre la fase 1 |
| 3 | Contenido real página por página (depende de Santi: texto + capturas) | Páginas pobladas, una por una |
| 4 | Deploy a Netlify | Sitio en vivo (privado) |

Fases 1 y 2 son los candidatos naturales para usar el crédito de sesión en la nube de Claude Code — son tareas de código acotadas con resultado revisable como PR. Fase 3 depende de contenido que solo Santi puede aportar (no es código).
