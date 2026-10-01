import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import {OWL_RINGS, OWL_RING_RADIUS, OWL_PATHS} from './owlFacePath';

// Ojo de búho calcado de static/img/owl-eyebrow-reference.png (ver scripts/trace-owl-face.py).
// El viewBox se centra en el anillo del PNG, así que el trazado conserva sus coordenadas originales.
// La pupila (el brillo es un hueco) lleva .pupil para el parpadeo.
function OwlEye({side}) {
  const [cx, cy] = OWL_RINGS[side];
  const r = OWL_RING_RADIUS;
  return (
    <svg className={styles.eye} viewBox={`${cx - r} ${cy - r} ${2 * r} ${2 * r}`} aria-hidden="true">
      <path d={OWL_PATHS['ring' + side]} fill="currentColor" fillRule="evenodd" />
      <path className={styles.pupil} d={OWL_PATHS['pup' + side]} fill="currentColor" fillRule="evenodd" />
    </svg>
  );
}

// Cejas, puente y pico (calco del mismo PNG). Casi invisibles en reposo; opacity 1 con hover.
function OwlFace() {
  return (
    <svg className={styles.face} viewBox="0 0 130 77" aria-hidden="true">
      <path d={OWL_PATHS.face} fill="currentColor" fillRule="evenodd" />
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
        <OwlEye side="L" />
        <OwlEye side="R" />
      </span>
      <span aria-hidden="true">LS</span>
    </span>
  );
}
