---
sidebar_position: 1
herramienta: true
etapa: "Etapa 5 · Entregar"
---

# 13. Exportar planos (PDF/DWG) con auditoría de carpetas

## Qué hace

Exporta los planos a PDF y DWG, los organiza en carpetas y audita el resultado.

**Auditoría de carpetas:** cruza en ambos sentidos los planos del modelo con los archivos en disco:

1. **Planos sin archivo:** planos del modelo que no tienen su PDF o DWG exportado en la carpeta esperada.
2. **Archivos huérfanos:** archivos en las carpetas de destino que no corresponden a ningún plano del modelo actual.

**Versionado automático:** antes de exportar la nueva versión, las versiones anteriores se mueven a una subcarpeta `Anteriores/`.

**Estructura de carpetas:** dos niveles, según los parámetros del plano. Cada nivel busca, en este orden, el primer parámetro que exista:

- **Nivel 1:** `Disciplina`, `Categoría`, `Categoria`, `Tipo de plano`, `Tipo`.
- **Nivel 2:** `Tipo de Plano`, `Grupo`, `Subdisciplina`, `Subtipo`, `Fase`.

La raíz del proyecto se guarda por proyecto en `%AppData%/BIMTools/rootfolders.txt`.

## Cuándo usarla

_Contenido pendiente_

## Cómo se usa

_Contenido pendiente_

## Requisitos

_Contenido pendiente_

## Limitaciones

Si un plano no tiene los parámetros de organización, queda en la carpeta raíz sin subcarpeta. No rompe la exportación, pero el plano no queda organizado; la auditoría lo detecta como plano sin ruta completa.

## Estado

_Contenido pendiente_
