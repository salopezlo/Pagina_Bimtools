---
sidebar_position: 2
herramienta: true
etapa: "Etapa 1 · Preparar"
---

# 2. Nomenclatura de familias y tipos

## Qué hace

Valida la nomenclatura de los tipos de elementos del proyecto contra una lista de prefijos por categoría de Revit. Hay 21 prefijos definidos:

| Categoría Revit | Prefijo | Descripción | Unidad APU |
|---|---|---|---|
| OST_Walls | MA | Mampostería | m² |
| OST_Walls | DV | Divisiones livianas | m² |
| OST_Walls | AD | Acabado seco | m² |
| OST_Walls | AR | Acabado revoque húmedo | m² |
| OST_Walls | AC | Acabado revoque seco | m² |
| OST_Walls | MC | Muros de contención | m² |
| OST_Floors | LE | Losa estructural | m² |
| OST_Floors | CP | Contrapiso | m² |
| OST_Floors | MN | Mortero de nivelación | m² |
| OST_Floors | PA | Piso acabado | m² |
| OST_Roofs | CU | Cubierta | m² |
| OST_Roofs | IM | Impermeabilización | m² |
| OST_Ceilings | CR | Cielo raso | m² |
| OST_Doors | PT | Puertas | und |
| OST_Windows | VN | Ventanas | und |
| OST_StructuralColumns | CO | Columnas | und |
| OST_StructuralFraming | VG | Vigas | ml |
| OST_StructuralFoundation | CM | Cimentación | m³ |
| OST_PipeSegments | IH | Hidráulica / Sanitaria | gl |
| OST_PipeSegments | IG | Gas | gl |
| OST_ElectricalEquipment | IE | Eléctrica | gl |

Mobiliario (OST_Furniture) y Carpintería fija (OST_Casework) están excluidas y no llevan prefijo. Las tuberías y los equipos eléctricos también están excluidos y se cuantifican como global, no por pieza.

## Cuándo usarla

_Contenido pendiente_

## Cómo se usa

Las reglas se pueden editar desde una ventana del propio plugin (Editor de reglas), sin tocar el archivo `naming-rules.json` a mano.

## Requisitos

_Contenido pendiente_

## Limitaciones

Solo se validan los elementos cuya categoría de Revit aparece en las reglas. Si una categoría no está mapeada, el elemento no aparece en la lista de validación: no se marca ni como error ni como válido.

## Estado

_Contenido pendiente_
