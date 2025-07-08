// components/ClientLayout.tsx
'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Loader from './Loader';
import Navigationbar from './Navigationbar';
import Footer from './pages/Footer';
import LocomotiveScroll from 'locomotive-scroll';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 500); // adjust as needed
    return () => clearTimeout(timer);
  }, [pathname]);
  useEffect(()=>{
const locomotiveScroll = new LocomotiveScroll();

  },[]);

  return (
    <>
      {loading && <Loader />}
      <Navigationbar />
      {!loading && children}
      <Footer/>
    </>
  );
}
