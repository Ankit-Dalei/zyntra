// components/ClientLayout.tsx
'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Loader from './Loader';
import Navigationbar from './Navigationbar';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 500); // adjust as needed
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      {loading && <Loader />}
      <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-[#1e1f36] to-[#0b0c25]">

          {/* Glowing Blob 1 */}
          <div className="absolute w-96 h-96 top-10 left-10 rounded-full bg-purple-600 opacity-30 blur-3xl" />
        
          {/* Glowing Blob 2 */}
          <div className="absolute w-96 h-96 bottom-10 right-10 rounded-full bg-pink-500 opacity-20 blur-3xl" />
        
          {/* Wavy Gradient Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#3f3e99_10%,_transparent_70%)] opacity-20" />
        
          {/* Content */}
      <Navigationbar />
      {!loading && children}
    </div>
    </>
  );
}
