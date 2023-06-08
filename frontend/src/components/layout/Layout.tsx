import * as React from 'react';
import NavBar from '@sections/NavBar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      <div id='skip-nav'>{children}</div>
    </>
  )
}
