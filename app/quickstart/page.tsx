import React from 'react';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { GetYear } from '@/utils/year';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Tabs');
  const year = GetYear();

  return {
    title: `AvantZero | ${t('QuickstartTab')}`,
    robots: 'follow, noindex',
    other: {
      copyright: `© A Pixelated Point of View ${year}. Code licensed under MIT.`
    }
  };
};


const Quickstart: React.FC = () => {
    const t = useTranslations('QuickstartPage');
    return (
        <h2>{t('QSTitle')}</h2>
    )
};

export default Quickstart;