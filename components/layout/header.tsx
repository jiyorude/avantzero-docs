import React from 'react';
import Link from 'next/link';
import { IoLogoGithub, IoLogoPython } from 'react-icons/io';
import { MdDownload } from 'react-icons/md';

const Header: React.FC = () => {
    return (
        <header className='h-20 flex md:justify-end select-none'>
            <section className='shadow-xl flex md:justify-end w-full md:w-fit'>
                <button className='bg-AVZWhi w-1/5 md:w-28 h-full mxFlexCenter'>
                    <Link href='https://github.com/jiyorude/avantzero/releases' target='_blank'>
                        <MdDownload size={45} className='fill-AVZGre bg-transparent size-10' title='Download the latest release' />
                    </Link>
                </button>
                <button className='bg-AVZRed w-1/5 md:w-28 h-full mxFlexCenter'>
                    <Link href='https://pypi.org/project/avantzero/' target='_blank'>
                        <IoLogoPython size={45} className='fill-AVZBla bg-transparent size-10' title='Check out the PyPi project page' />
                    </Link>
                </button>
                <button className='bg-AVZTea w-1/5 md:w-28 h-full mxFlexCenter'>
                    <Link href='https://github.com/jiyorude/avantzero/' target='_blank'>
                        <IoLogoGithub size={45} className='fill-AVZWhi bg-transparent size-10' title='Visit the GitHub repository' />
                    </Link>
                </button>
                <button className='bg-AVZBla w-2/5 md:w-48 h-full mxFlexCenter'>
                    <Link href="/" >
                       <h1 className='font-AVZMai text-AVZWhi text-[65px] mb-5'>A</h1>
                    </Link>
                </button>
            </section>
        </header>
    )
}

export default Header;