import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Brand from '@site/src/components/Brand';
import styles from './index.module.css';

const ETAPAS = [
  {n: 1, titulo: 'Preparar el proyecto', to: '/docs/preparar-proyecto/carpetas-organizacion-planos'},
  {n: 2, titulo: 'Modelar', to: '/docs/modelar/techos-por-habitacion'},
  {n: 3, titulo: 'Documentar', to: '/docs/documentar/numeracion-vertices-directriz'},
  {n: 4, titulo: 'Cuantificar', to: '/docs/cuantificar/tablas-de-cantidades'},
  {n: 5, titulo: 'Entregar', to: '/docs/entregar/exportar-planos'},
];

export default function Home() {
  const logoSrc = useBaseUrl('/img/logo.svg');
  return (
    <Layout title="BIMTOOLS" description="Documentación de la suite BIMTOOLS para Revit">
      <header className={styles.hero}>
        <img src={logoSrc} alt="" className={styles.owl} />
        <h1 className={styles.title}>
          <Brand size="xl" />
        </h1>
        <p className={styles.tagline}>Herramientas para Revit, en el orden en que se usan en un proyecto.</p>
        <Link className="button button--primary button--lg" to={ETAPAS[0].to}>
          Empezar por la etapa 1
        </Link>
      </header>
      <main className={styles.stages}>
        {ETAPAS.map((e) => (
          <Link key={e.n} to={e.to} className={styles.stage}>
            <span className={styles.stageNum}>{e.n}</span>
            <span className={styles.stageName}>{e.titulo}</span>
          </Link>
        ))}
      </main>
    </Layout>
  );
}
