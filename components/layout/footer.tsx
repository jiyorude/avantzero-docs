"use client";
import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';
import Image from 'next/image';
import APPOVLogo from '@/public/images/APPOV_Logo.svg';
import { IoIosSettings } from "react-icons/io";
import { useState, useEffect } from 'react';
import Language from '../misc/language';
import { useTranslations } from 'next-intl';
import { GetYear } from '../../utils/year';

const Footer: React.FC = () => {
    const t = useTranslations('Footer');
    const [settings, setSettings] = useState(false);
    const year = GetYear();

    useEffect(() => {
        document.body.style.overflow = settings ? 'hidden' : 'auto';
    }, [settings]);

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") setSettings(false);
        };
        if (settings) {
            window.addEventListener("keydown", handleEsc);
        }
        return () => {
            window.removeEventListener("keydown", handleEsc);
        };
    }, [settings]);

    return (
        <>
        <footer className='bottom-0 fixed z-[999] flex md:flex-col shadow-lg select-none'>
            <section className='w-16 bg-AVZBla h-14 mxFlexCenter' aria-label={t('APPOVLogoARIA')}>
                <Image
                    src={APPOVLogo}
                    alt={t('APPOVLogoALT')}
                    priority
                    width={37}
                    height={37}
                    quality={100}
                />
            </section>
            <button onClick={() => setSettings(true)} className='w-16 bg-AVZTea h-14  flex justify-center items-center hover:cursor-pointer' title={t('LanguageThemeSettings')} aria-label={t('LanguageThemeSettingsARIA')} tabIndex={0} >
                <IoIosSettings size={45} className='fill-AVZWhi bg-transparent size-9 opacity-90' />
            </button>
            <section className='w-16 bg-AVZRed h-14 mxFlexCenter flex-col leading-3.5 ' aria-label={t('CopyrightARIA')}>
                <h3 className='text-AVZWhi font-AVZBla text-[12px]'>0.2.0</h3>
                <p className='text-AVZWhi font-AVZLight text-[10px]'>&copy; {year}</p>
            </section>
        </footer>

        <AnimatePresence>
        {settings && (
            <motion.aside 
                className="fixed inset-0 bg-black/30 backdrop-blur-[10px] flex justify-center items-center z-1000" 
                onClick={() => setSettings(false)}
                initial={{ opacity: 0}}
                animate={{ opacity: 1}}
                exit={{ opacity: 0}}
                transition={{ duration: 0.3, delay: 0.2, ease: "easeOut"}}
                >
                    <motion.section 
                        className="bg-AVZWhi relative rounded-2xl w-[355px] md:w-[600px] shadow-xl p-6 flex flex-col md:flex-row justify-center items-center" 
                        onClick={(e) => e.stopPropagation()}
                        initial={{y: "100vh"}}
                        animate={{y: 0}}
                        exit={{y: "100vh"}}
                        transition={{ duration: 0.5, ease: "easeOut"
                        }}
                    >
                        <button className='hover:cursor-pointer p-4 rounded-xl absolute -top-0.5 right-1' title={t('CloseSettings')} aria-label={t('CloseSettingsARIA')} onClick={() => setSettings(false)}>
                            <h3 className='font-AVZBol text-AVZGre hover:text-AVZTea active:text-AVZTea text-2xl'>X</h3>
                        </button>
                        <motion.section className='flex justify-center items-center md:w-1/2 h-full md:p-10 p-6 flex-col md:border-r-1 md:border-black'>
                            <h2 className='text-AVZWhi px-2 py-0.5 bg-AVZBla text-lg md:text-xl font-AVZSeb'>{t('LanguageSettingsTitle')}</h2>
                            <Language onClose={() => setSettings(false)} />
                        </motion.section>
                        <motion.section className='flex justify-center items-center md:w-1/2 h-full md:p-10 p-6 flex-col'>
                            <h2 className='text-AVZWhi px-2 py-0.5 bg-AVZBla text-lg md:text-xl font-AVZSeb'>{t('ThemeSettingsTitle')}</h2>
                            <p className='pt-4'>Coming soon...</p>
                        </motion.section>
                    </motion.section>
            </motion.aside>
        )}
        </AnimatePresence>
        </>
    )
};

export default Footer;