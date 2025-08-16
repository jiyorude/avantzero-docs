'use client';
import React from 'react';
import { setUserLocale } from "@/services/locale-actions";
import UKFlag from '@/public/images/flags/uk_flag.svg';
import NLFlag from '@/public/images/flags/nl_flag.svg';
import Image from 'next/image';

export default function Language() {
  return (
    <section className=''>
        <form action={setUserLocale} className='*:px-3 md:pr-9 flex justify-center md:justify-end h-16 *:hover:cursor-pointer bg-transparent'>
            <button type="submit" name="locale" value="en" className='fill-AVZWhi' title='Change language to English'>
                    <Image 
                        src={UKFlag}
                        alt='United Kingdom flag icon'
                        width={30}
                        height={30}
                        priority
                        quality={100}
                        className='mxDropShadow'
                    />
            </button>
            <button type="submit" name="locale" value="nl" className='bg-transparent' title='Verander de taal naar het Nederlands'>
                <Image 
                    src={NLFlag}
                    alt='Dutch flag icon'
                    width={35}
                    height={35}
                    priority
                    quality={100}
                    className='bg-transparent drop-shadow-amber-500'
                />
            </button>
        </form>
    </section>
  );
}
