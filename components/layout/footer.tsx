import React from 'react';
import Image from 'next/image';
import APPOVLogo from '@/public/images/APPOV_Logo.svg';
import Link from 'next/link';

interface FooterProps {
    t: (key: string) => string;
}

const Footer: React.FC<FooterProps> = ({ t }) => {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <footer className='bottom-0 fixed flex md:flex-col select-none'>
            <section className='w-16 bg-AVZBla h-14 mxFlexCenter' aria-label={t('APPOVLOGOARIA')}>
                <Image
                    src={APPOVLogo}
                    alt={t('APPOVLOGO')}
                    priority
                    width={37}
                    height={37}
                    quality={100}
                />
            </section>
            <button className='w-16 bg-AVZTea h-14' aria-label='Container containing a link for further information regarding the MIT-License'>
                <Link href='https://opensource.org/license/mit' target='_blank' className='mxFlexCenter w-full h-full'>
                    <h3 className='text-AVZWhi opacity-90 font-AVZBla text-md'>MIT</h3>
                </Link>
            </button>
            <section className='w-16 bg-AVZRed h-14 mxFlexCenter flex-col leading-3.5 ' aria-label='Container with copyright and documentation version information.'>
                <h3 className='text-AVZWhi opacity-50 font-AVZBol text-[12px]'>0.1.0</h3>
                <p className='text-AVZWhi opacity-50 font-AVZLight text-[10px]'>&copy; {year}</p>
            </section>
        </footer>
    )
}

export default Footer;