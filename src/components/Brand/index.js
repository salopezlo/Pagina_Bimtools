import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

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

// Cejas (dos trazos angulados, separados) y pico (triángulo hacia abajo) del búho de línea.
// Casi invisibles en reposo; suben a opacity 1 con hover sobre todo el wordmark.
function OwlFace() {
  return (
    <svg className={styles.face} viewBox="0 0 176 160" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="9" strokeLinecap="square" strokeLinejoin="miter">
        <path d="M8 22 L76 36" />
        <path d="M168 22 L100 36" />
      </g>
      <path d="M76 128 L100 128 L88 150 Z" fill="currentColor" />
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
