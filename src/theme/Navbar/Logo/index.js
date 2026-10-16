import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Brand from '@site/src/components/Brand';

// Swizzle (wrap) de Navbar/Logo: ícono de búho + wordmark BIMTOOLS.
// El ícono sale de static/img/logo.svg — reemplazar ese archivo cambia el logo.
export default function NavbarLogo() {
  const logoSrc = useBaseUrl('/img/logo.svg');
  return (
    <Link to="/" className="navbar__brand" aria-label="BIMTOOLS — inicio">
      <img src={logoSrc} alt="" className="navbar__logo" height="32" width="32" />
      <Brand />
    </Link>
  );
}
