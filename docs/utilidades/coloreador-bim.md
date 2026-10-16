---
sidebar_position: 2
herramienta: true
etapa: "Utilidad"
---

# ColoreadorBIM

## Qué hace

Colorea los elementos de la vista activa según el valor de cualquier parámetro.

El coloreo se aplica con filtros de vista (View Filters) con relleno sólido, dentro de Revit. Se puede usar para presentación (visualizar la distribución de materiales, acabados o fases) y para control de calidad (detectar elementos sin parámetro asignado y verificar la distribución de tipos).

## Cuándo usarla

- **Presentación:** visualizar la distribución de materiales, acabados o fases.
- **Control de calidad:** detectar elementos sin parámetro asignado y verificar la distribución de tipos.

## Cómo se usa

1. El plugin recoge los elementos de la vista activa y lista los parámetros disponibles (de instancia y de tipo).
2. El usuario elige un parámetro; el plugin agrupa los elementos por los valores distintos de ese parámetro.
3. Se asignan los colores de una de estas dos formas:
   - **Degradado:** configurable; por defecto, de `#5C52D5` (inicio) a `#FF6B6B` (fin).
   - **Colores individuales** por valor.
4. Antes de aplicar, se puede previsualizar la leyenda de colores.

## Requisitos

_Contenido pendiente_

## Limitaciones

Se aplica dentro de Revit, como filtros de vista. No genera una imagen ni una exportación aparte.

## Estado

_Contenido pendiente_
