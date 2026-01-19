import React from 'react';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { GetYear } from '@/utils/year';
import NotFoundClient from '@/components/misc/not-found-client';
import Image  from "next/image";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('NotFound');
    const year = GetYear();
  
  return {
    title: `AvantZero | ${t('NotFoundTitle')}`,
    robots: 'nofollow, noindex',
    other: {
      copyright: `© A Pixelated Point of View ${year}. Code licensed under MIT.`
    }
  };
}

const NotFound: React.FC = () => {
  const t = useTranslations('NotFound');

  return (
    <main className='h-screen pt-20 w-full flex justify-center items-center gap-1.5 flex-col'>
        <Image
            src={"/images/misc/404.jpg"}
            width={500}
            height={500}
            alt={t('NotFoundAlt')}
            className='shadow-lg mb-4'
        />
        
      <h2 className='text-3xl font-AVZLight'>{t('NotFoundHeader')}</h2>
      <p>{t('NotFoundPara')}</p>
      <NotFoundClient />
    </main>
  );
};

export default NotFound;