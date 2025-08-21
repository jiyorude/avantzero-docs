import React from "react";
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('HomePage');
  
  return (
    <main className="border-3 border-red-400 mxFlexCenter">
      <section className="mxMainGrid">
        
      </section>

    </main>
  );
}
