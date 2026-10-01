import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import {OWL_FACE_PATH} from './owlFacePath';

// Ojo de búho: reemplaza cada "O" del wordmark.
// La pupila (+ brillo) se agrupa en .pupil para el parpadeo.
function OwlEye() {
  return (
    <svg className={styles.eye} viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="3" />
      <g className={styles.pupil}>
        <circle cx="12" cy="12" r="4.5" fill="currentColor" />
        <circle cx="14" cy="10" r="1.4" fill="var(--ifm-background-color)" />
      </g>
    </svg>
  );
}

// Cejas, puente y pico: calco exacto de static/img/owl-eyebrow-reference.png.
// El viewBox es el del PNG (130×77); styles.module.css lo escala y posiciona para que los
// anillos de la referencia coincidan con las dos O. Casi invisibles en reposo; opacity 1 con hover.
function OwlFace() {
  return (
    <svg className={styles.face} viewBox="0 0 130 77" aria-hidden="true">
      <path d={OWL_FACE_PATH} fill="currentColor" fillRule="evenodd" />
    </svg>
  );
}

/** Wordmark BIMTOOLS con las dos "O" como ojos de búho. */
export default function Brand({size = 'md', className}) {
  return (
    <span className={clsx(styles.brand, styles[size], className)} aria-label="BIMTOOLS">
      <span aria-hidden="true">BIMT</span>
      <span className={styles.eyes} aria-hidden="true">
        <OwlFace />
        <OwlEye />
        <OwlEye />
      </span>
      <span aria-hidden="true">LS</span>
    </span>
  );
}
