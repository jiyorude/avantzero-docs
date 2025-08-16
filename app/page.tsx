import React from "react";
import {useTranslations} from 'next-intl';

export default function Home() {
  const t = useTranslations('HomePage');
  
  return (
    <h2>{t('title')}</h2>
  );
}
