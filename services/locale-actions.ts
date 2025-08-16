// lib/locale-actions.ts
'use server';

import { cookies } from 'next/headers';
import { Locale } from '@/i18n/config';

const COOKIE_NAME = 'LANG';

export async function setUserLocale(formData: FormData) {
  const locale = formData.get('locale') as Locale;
  if (!locale) return;

  (await cookies()).set({
    name: COOKIE_NAME,
    value: locale,
    path: '/',
    httpOnly: false,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
  });
}
