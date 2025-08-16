'use client';
import React from 'react';
import { setUserLocale } from "@/services/locale-actions";
import UKFlag from '@/public/images/flags/uk_flag.svg';
import NLFlag from '@/public/images/flags/nl_flag.svg';
import Image from 'next/image';

interface LanguageProps {
  onClose?: () => void;
}

export default function Language({ onClose }: LanguageProps) {
  return (
    <section className=''>
        <form action={async (formData: FormData) => {await setUserLocale(formData); onClose?.()}} className='flex justify-center items-center *:px-4.5 pt-6 *:hover:cursor-pointer'>
            <button type="submit" name="locale" value="en" className='fill-AVZWhi' title='Change language to English'>
                    <Image 
                        src={UKFlag}
                        alt='United Kingdom flag icon'
                        width={40}
                        height={40}
                        priority
                        quality={100}
                        className='mxDropShadow'
                    />
            </button>
            <button type="submit" name="locale" value="nl" className='bg-transparent' title='Verander de taal naar het Nederlands'>
                <Image 
                    src={NLFlag}
                    alt='Dutch flag icon'
                    width={45}
                    height={45}
                    priority
                    quality={100}
                    className='mxDropShadow'
                />
            </button>
        </form>
    </section>
  );
}
