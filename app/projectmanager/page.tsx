import React from 'react';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { GetYear } from '@/utils/year';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Tabs');
  const year = GetYear();

  return {
    title: `AvantZero | ${t('ProjectManagerTab')}`,
    robots: 'follow, noindex',
    other: {
      copyright: `© A Pixelated Point of View ${year}. Code licensed under MIT.`
    }
  };
};

const ProjectManager: React.FC = () => {
    const t = useTranslations('ProjectManagerPage');
    return (
        <h2>{t('PMTitle')}</h2>
    )
};

export default ProjectManager;