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
        <header className='h-20 flex md:justify-end select-none fixed w-full top-0 mx-auto max-w-7xl z-999'>
            <section className='shadow-xl flex md:justify-end w-full md:w-fit'>
                <Link
                    href='https://github.com/jiyorude/avantzero/releases'
                    target='_blank'
                    className='bg-AVZWhi w-1/5 md:w-28 h-full hover:cursor-pointer mxFlexCenter'
                    title={t('DownloadTitle')}
                    aria-label={t('DownloadARIA')}
                    tabIndex={0}
                >
                    <MdDownload size={45} className='fill-AVZGre bg-transparent size-10' aria-hidden="true"/>
                </Link>
                <Link
                    href='https://pypi.org/project/avantzero/'
                    target='_blank'
                    className='bg-AVZRed w-1/5 md:w-28 h-full hover:cursor-pointer mxFlexCenter'
                    title={t('PyPiTitle')}
                    aria-label={t('PyPiARIA')}
                    tabIndex={0}
                >
                    <IoLogoPython size={45} className='fill-AVZBla bg-transparent size-10' aria-hidden="true"/>
                </Link>
                <Link
                    href='https://github.com/jiyorude/avantzero/'
                    target='_blank'
                    className='bg-AVZTea w-1/5 md:w-28 h-full hover:cursor-pointer mxFlexCenter'
                    title={t('RepoTitle')}
                    aria-label={t('RepoARIA')}
                    tabIndex={0}
                >
                    <IoLogoGithub size={45} className='fill-AVZWhi bg-transparent size-10' aria-hidden="true"/>
                </Link>
                <Link
                    href="/"
                    className='bg-AVZBla relative w-2/5 md:w-48 h-full hover:cursor-pointer z-10 mxFlexCenter'
                    title={t('LogoTitle')}
                    aria-label={t('LogoARIA')}
                    tabIndex={0}
                >
                    <Image
                        src={AvantZeroLogo}
                        alt={t('LogoALT')}
                        width={65}
                        height={65}
                        priority
                        quality={100}
                    />
                </Link>
            </section>
        </header>
    )
}

export default Header;