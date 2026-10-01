import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

// Ojo de búho: reemplaza cada "O" del wordmark.
function OwlEye() {
  return (
    <svg className={styles.eye} viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="3" />
      <circle cx="12" cy="12" r="4.5" fill="currentColor" />
      <circle cx="14" cy="10" r="1.4" fill="var(--ifm-background-color)" />
    </svg>
  );
}

/** Wordmark BIMTOOLS con las dos "O" como ojos de búho. */
export default function Brand({size = 'md', className}) {
  return (
    <span className={clsx(styles.brand, styles[size], className)} aria-label="BIMTOOLS">
      <span aria-hidden="true">BIMT</span>
      <OwlEye />
      <OwlEye />
      <span aria-hidden="true">LS</span>
    </span>
  );
}
