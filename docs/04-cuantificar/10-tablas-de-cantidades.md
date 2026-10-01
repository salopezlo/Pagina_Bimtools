---
sidebar_position: 1
herramienta: true
etapa: "Etapa 4 · Cuantificar"
---

# 10. Tablas de cantidades

## Qué hace

Genera tablas de cantidades (schedules) a partir de los prefijos de nomenclatura. Cada tabla se llama `CANT - Prefijo Descripción` y filtra los elementos cuyo nombre de tipo empieza con ese prefijo.

Las columnas por defecto dependen de la categoría:

| Categoría | Columnas |
|---|---|
| Muros (OST_Walls) | Family Name, Type Name, Area, Length, Height |
| Pisos (OST_Floors) | Family Name, Type Name, Area, Thickness |
| Cubiertas (OST_Roofs) | Family Name, Type Name, Area |
| Cielos (OST_Ceilings) | Family Name, Type Name, Area |
| Puertas (OST_Doors) | Family Name, Type Name, Width, Height, Mark |
| Ventanas (OST_Windows) | Family Name, Type Name, Width, Height, Mark |
| Columnas (OST_StructuralColumns) | Family Name, Type Name, Volume, Mark |
| Vigas (OST_StructuralFraming) | Family Name, Type Name, Cut Length, Volume |
| Cimentación (OST_StructuralFoundation) | Family Name, Type Name, Volume |

## Cuándo usarla

_Contenido pendiente_

## Cómo se usa

El usuario elige cuáles prefijos quiere generar desde la ventana de PresupuestoBIM. La lista de tablas posibles se construye a partir de `naming-rules.json`. No se genera una tabla por cada prefijo automáticamente.

## Requisitos

Los nombres de tipo deben llevar el prefijo correcto (ver la página de nomenclatura de familias y tipos, Etapa 1).

## Limitaciones

Dependencia crítica con la Etapa 1: si los nombres de tipo no llevan el prefijo correcto, el filtro no encuentra nada y la tabla sale vacía.

## Estado

_Contenido pendiente_
