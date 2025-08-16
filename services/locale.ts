'use server';

import { cookies } from 'next/headers';
import { Locale, defaultLocale } from '@/i18n/config';

const COOKIE_NAME = 'LANG';

export async function setUserLocale(locale: Locale) {
  (await cookies()).set({
    name: COOKIE_NAME,
    value: locale,
    path: '/',    
    httpOnly: false, 
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax'
  });
}

export async function getUserLocale() {
  return (await cookies()).get(COOKIE_NAME)?.value || defaultLocale;
}
