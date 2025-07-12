'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Loader from './loaders/Loader';
import Navigationbar from './pages/Navigationbar';
import Footer from './pages/Footer';
import Login from '@/app/(AuthSystem)/login/page';
import Signup from '@/app/(AuthSystem)/signup/page';
import Reset from '@/app/(AuthSystem)/passReset/page';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 500); // adjust as needed
    return () => clearTimeout(timer);
  }, [pathname]);

  if (loading) {
    return <Loader />;
  }

  if (pathname=='/login') {
    return (
      <>
        <Navigationbar />
        <Login />
      </>
    );
  }

  if (pathname=='/signup') {
    return (
      <>
        <Navigationbar />
        <Signup />
      </>
    );
  }
  
  if (pathname=='/passReset') {
    return (
      <>
        <Navigationbar />
        <Reset />
      </>
    );
  }

  return (
    <>
      <Navigationbar />
      {children}
      <Footer />
    </>
  );
}
