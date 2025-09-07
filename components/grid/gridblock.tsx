"use client";
import React, { ReactElement, useMemo } from 'react';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';


interface GridBlockProps {
    icon?: ReactElement;
    header: string;
    backgroundColor: 'Red' | 'Teal' | 'Black' | 'Grey' | 'White' | 'ShadeOne' | 'ShadeTwo' | 'ShadeThree' | 'ShadeFour' | 'ShadeFive' | 'ShadeSix';
    textColor: 'White' | 'Teal' | 'Red' | 'Black';
    textFont: 'Light' | 'Regular' | 'Medium' | 'Semibold' | 'Bold' | 'Black' | 'Logo';
    textSize: 'S' | 'M' | 'L' | 'XL' | '2XL' | '3XL' | '4XL' | '5XL' | '6XL' | '9XL';
    backgroundImage?: StaticImageData;
    linkTo: string;
    title: string;
    ariaTitle: string;
    hasHover?: boolean;
}


const handleBackgroundColor = (choice: GridBlockProps['backgroundColor']) => {
    switch(choice) {
        case 'Red':
            return 'bg-AVZRed';
        case 'Teal':
            return 'bg-AVZTea';
        case 'Black':
            return 'bg-AVZBla';
        case 'Grey':
            return 'bg-AVZGre';
        case 'White':
            return 'bg-AVZWhi';
        case 'ShadeOne':
            return 'bg-AVZSh1';
        case 'ShadeTwo':
            return 'bg-AVZSh2';
        case 'ShadeThree':
            return 'bg-AVZSh3';
        case 'ShadeFour':
            return 'bg-AVZSh4';
        case 'ShadeFive':
            return 'bg-AVZSh5';
        case 'ShadeSix':
            return 'bg-AVZSh6';
        default:
            return 'bg-AVZTea';
    };
};

const handleTextColor = (choice: GridBlockProps['textColor']) => {
    switch(choice) {
        case 'White':
            return 'text-AVZWhi';
        case 'Teal':
            return 'text-AVZTea';
        case 'Red':
            return 'text-AVZRed';
        case 'Black':
            return 'text-AVZBla';
        default:
            return 'text-AVZBla';
    };
};

const handleTextFont = (choice: GridBlockProps['textFont']) => {
    switch(choice) {
        case 'Light':
            return 'font-AVZLight';
        case 'Regular':
            return 'font-AVZReg';
        case 'Medium':
            return 'font-AVZMed';
        case 'Semibold':
            return 'font-AVZSeb';
        case 'Bold':
            return 'font-AVZBol';
        case 'Black':
            return 'font-AVZBla';
        case 'Logo':
            return 'font-AVZMai';
        default:
            return 'font-AVZMed';
    };
};

const handleTextSize = (choice: GridBlockProps['textSize']) => {
    switch(choice) {
        case 'S':
            return 'text-sm';
        case 'M':
            return 'text-md';
        case 'L':
            return 'text-lg';
        case 'XL':
            return 'text-xl';
        case '2XL':
            return 'text-2xl';
        case '3XL':
            return 'text-3xl';
        case '4XL':
            return 'text-4xl';
        case '5XL':
            return 'text-5xl';
        case '6XL':
            return 'text-6xl';
        case '9XL':
            return 'text-9xl';
    };
};

const GridBlock: React.FC<GridBlockProps> = ({ icon, header, backgroundColor, textColor, textFont, textSize, backgroundImage, hasHover = true, linkTo, title, ariaTitle }) => {
    const backColor = handleBackgroundColor(backgroundColor);
    const txtColor = handleTextColor(textColor);
    const txtFont = handleTextFont(textFont);
    const txtSize = handleTextSize(textSize);

    return (
        <Link href={linkTo} passHref>
            <button className={`w-full h-full mxFlexCenter rounded-sm flex-col shadow-md relative overflow-hidden ${backColor} ${txtColor} ${hasHover ? "hover:cursor-pointer" : ""}  p-6`} title={title} aria-label={ariaTitle} tabIndex={1}>
                {backgroundImage && (
                    <Image 
                        src={backgroundImage}
                        alt=""
                        fill
                        priority
                        className='absolute inset z-0 opacity-30'
                        style={{ objectFit: 'cover' }}
                    />
                )}
                <section className='z-10 flex flex-col justify-center items-center'>
                    {icon && <figure className='text-4xl'>{icon}</figure>}
                    <h2 className={`${txtFont} ${txtSize} tracking-[3px]`}>{header}</h2>
                </section>
            </button>
        </Link>
    )
}

export default GridBlock;