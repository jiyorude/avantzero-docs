"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function NotFoundClient() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/');
    }, 511000);

    return () => clearTimeout(timer);
  }, [router]);

  return null;
}
