import * as React from 'react';
import { Header } from './Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div id='skip-nav' className="col-span-1 row-start-2 sm:col-start-2">{children}</div>
    </>
  )
}
