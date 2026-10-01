---
sidebar_position: 3
herramienta: true
etapa: "Etapa 3 · Documentar"
---

# 8. Cotas automáticas

## Qué hace

Crea cotas automáticas en capas, que se activan con casillas de verificación:

1. **Capa 1 — Interior:** cotas de los muros interiores de las habitaciones.
2. **Capa 2 — Vanos:** puertas y ventanas (con opciones separadas para cada una).
3. **Capa 3 — Grillas:** cotas a las líneas de grilla.
4. **Capa 4 — Total:** cota total de fachada, de extremo a extremo.

Hay además tres opciones adicionales que no forman parte de las 4 capas principales: cotas de muros interiores independientes, vanos interiores y espesor de muros.

## Cuándo usarla

_Contenido pendiente_

## Cómo se usa

Se configuran estas distancias, que se conservan entre sesiones:

- **Offset base:** distancia base desde el muro.
- **Separación entre capas.**
- **Offset de espesor.**

También hay una opción para limpiar las cotas existentes antes de crear las nuevas.

## Requisitos

- Vista de planta activa.
- Muros modelados con geometría razonable (líneas de ubicación accesibles).
- Grillas definidas, si se usa la Capa 3.

No depende de que los muros tengan la función de tipo "Exterior": el plugin agrupa los muros por dirección geométrica e identifica las fachadas como los grupos extremos, los más alejados en cada dirección.

## Limitaciones

Con muros curvos o no colineales el plugin no falla, pero las cotas resultantes pueden necesitar ajuste manual. Los muros no colineales se agrupan por su dirección dominante.

## Estado

_Contenido pendiente_
