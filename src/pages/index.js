import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {IconFolder, IconCube, IconFileText, IconCalculator, IconSend} from '@tabler/icons-react';
import Brand from '@site/src/components/Brand';
import styles from './index.module.css';

const ETAPAS = [
  {n: 1, Icon: IconFolder, titulo: 'Preparar el proyecto', to: '/docs/preparar-proyecto/carpetas-organizacion-planos'},
  {n: 2, Icon: IconCube, titulo: 'Modelar', to: '/docs/modelar/techos-por-habitacion'},
  {n: 3, Icon: IconFileText, titulo: 'Documentar', to: '/docs/documentar/numeracion-vertices-directriz'},
  {n: 4, Icon: IconCalculator, titulo: 'Cuantificar', to: '/docs/cuantificar/tablas-de-cantidades'},
  {n: 5, Icon: IconSend, titulo: 'Entregar', to: '/docs/entregar/exportar-planos'},
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
        <p className={styles.tagline}>Deja de adivinar el orden. BIMTOOLS guía cada paso de tu proyecto en Revit, desde la carpeta inicial hasta la entrega final.</p>
        <Link className="button button--primary button--lg" to={ETAPAS[0].to}>
          Empezar por la etapa 1
        </Link>
      </header>
      <div className={styles.stages}>
        {ETAPAS.map((e) => (
          <Link key={e.n} to={e.to} className={styles.stage}>
            <span className={styles.stageHead}>
              <e.Icon className={styles.stageIcon} size={36} stroke={1.5} aria-hidden="true" />
              <span className={styles.stageNum}>Etapa {e.n}</span>
            </span>
            <span className={styles.stageName}>{e.titulo}</span>
          </Link>
        ))}
      </div>
    </Layout>
  );
}
