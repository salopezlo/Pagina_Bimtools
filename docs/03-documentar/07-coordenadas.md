---
sidebar_position: 2
herramienta: true
etapa: "Etapa 3 · Documentar"
---

# 7. Coordenadas

## Qué hace

Numera las cotas puntuales (Spot Dimension) que ya existen en la vista activa. No coloca puntos nuevos: toma las cotas existentes, las filtra por tipo y les asigna una numeración secuencial simple (prefijo + contador).

Además, inserta una instancia de la familia `PuntoCoordenada` en la posición de cada cota, con los parámetros `Número de Punto`, `Coordenada N`, `Coordenada E` y `Elevación`.

## Cuándo usarla

_Contenido pendiente_

## Cómo se usa

El diálogo de numeración pide:

- **Prefijo:** texto libre (por ejemplo, `P-`, `C-` o `COORD-`).
- **Número inicial:** el entero desde el que empieza la secuencia.
- **Tipo de cota:** el tipo de cota puntual a filtrar.

## Requisitos

Cotas puntuales ya colocadas en la vista activa.

## Limitaciones

El prefijo es libre: no hay una lista cerrada de prefijos admitidos.

## Estado

_Contenido pendiente_
