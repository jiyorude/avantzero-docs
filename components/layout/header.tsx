import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IoLogoGithub, IoLogoPython } from 'react-icons/io';
import { MdDownload } from 'react-icons/md';
import AvantZeroLogo from '@/public/images/AvantZero_Logo.svg';
import { useTranslations } from 'next-intl';

const Header: React.FC = () => {
    const t = useTranslations('Header');
    return (
        <header className='h-20 flex md:justify-end select-none'>
            <section className='shadow-xl flex md:justify-end w-full md:w-fit'>
                <button className='bg-AVZWhi w-1/5 md:w-28 h-full hover:cursor-pointer' title={t('DownloadTitle')} aria-label={t('DownloadARIA')}>
                    <Link href='https://github.com/jiyorude/avantzero/releases' target='_blank' className='mxFlexCenter h-full w-full'>
                        <MdDownload size={45} className='fill-AVZGre bg-transparent size-10' />
                    </Link>
                </button>
                <button className='bg-AVZRed w-1/5 md:w-28 h-full hover:cursor-pointer' title={t('PyPiTitle')} aria-label={t('PyPiARIA')}>
                    <Link href='https://pypi.org/project/avantzero/' target='_blank' className='mxFlexCenter h-full w-full'>
                        <IoLogoPython size={45} className='fill-AVZBla bg-transparent size-10'  />
                    </Link>
                </button>
                <button className='bg-AVZTea w-1/5 md:w-28 h-full hover:cursor-pointer' title={t('RepoTitle')} aria-label={t('RepoARIA')}>
                    <Link href='https://github.com/jiyorude/avantzero/' target='_blank' className='mxFlexCenter h-full w-full'>
                        <IoLogoGithub size={45} className='fill-AVZWhi bg-transparent size-10' />
                    </Link>
                </button>
                <button className='bg-AVZBla relative w-2/5 md:w-48 h-full hover:cursor-pointer z-10' title={t('LogoTitle')} aria-label={t('LogoARIA')}>
                    <Link href="/" className='mxFlexCenter h-full w-full'>
                       <Image 
                            src={AvantZeroLogo}
                            alt={t('LogoALT')}
                            width={65}
                            height={65}
                            priority
                            quality={100}
                       />
                    </Link>
                </button>
            </section>
        </header>
    )
}

export default Header;