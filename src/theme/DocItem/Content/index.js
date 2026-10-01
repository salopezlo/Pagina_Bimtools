import React from 'react';
import clsx from 'clsx';
import {ThemeClassNames} from '@docusaurus/theme-common';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import Heading from '@theme/Heading';
import MDXContent from '@theme/MDXContent';

// Swizzle (eject simplificado) de DocItem/Content.
// Si el front matter trae `herramienta: true`, la página usa el layout de herramienta:
// cinta superior (etapa / estado) y secciones numeradas (ver custom.css → .tool-page).
// Estados válidos para `estado`: Disponible | En desarrollo | Planeado.
const ESTADOS = {
  Disponible: 'disponible',
  'En desarrollo': 'desarrollo',
  Planeado: 'planeado',
};

export default function DocItemContent({children}) {
  const {metadata, frontMatter, contentTitle} = useDoc();
  const syntheticTitle =
    !frontMatter.hide_title && typeof contentTitle === 'undefined' ? metadata.title : null;
  const isTool = frontMatter.herramienta === true;
  const estado = frontMatter.estado;

  return (
    <div className={clsx(ThemeClassNames.docs.docMarkdown, 'markdown', isTool && 'tool-page')}>
      {isTool && (
        <div className="tool-page__ribbon">
          <span className="tool-page__stage">{frontMatter.etapa}</span>
          {estado && (
            <span className={clsx('tool-page__status', `tool-page__status--${ESTADOS[estado] ?? 'planeado'}`)}>
              {estado}
            </span>
          )}
        </div>
      )}
      {syntheticTitle && (
        <header>
          <Heading as="h1">{syntheticTitle}</Heading>
        </header>
      )}
      <MDXContent>{children}</MDXContent>
    </div>
  );
}
