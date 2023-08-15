import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ReactNode } from 'react';
import type { NextPage } from 'next';

interface Props {
  children: ReactNode | ReactNode[] | NextPage;
  hideNavbar?: boolean;
  hideFooter?: boolean;
}

const LayoutWrapper = ({ children, hideNavbar = false, hideFooter = false }: Props) => {
  return (
    <div className="flex h-screen flex-col justify-between">
     {!hideNavbar && <Navbar />}
     <main className='mb-auto'>{children}</main>
     {!hideFooter && <Footer />}
    </div>
  )
}

export default LayoutWrapper;
