import React, { ReactElement } from 'react';
import Link from 'next/link';

interface GridBlockProps {
    icon?: ReactElement;
    header: string;
    backgroundColor: 'Red' | 'Teal' | 'Black';
    textColor: 'White' | 'Teal' | 'Red' | 'Black';
    textFont: 'Light' | 'Regular' | 'Medium' | 'Semibold' | 'Bold' | 'Black' | 'Logo';
    textSize: 'S' | 'M' | 'L' | 'XL' | '2XL' | '3XL' | '4XL' | '5XL';
    backgroundImage?: ReactElement;
    linkTo: string;
    title: string;
    ariaTitle: string;
}

const handleBackgroundColor = (choice: GridBlockProps['backgroundColor']) => {
    switch(choice) {
        case 'Red':
            return 'bg-AVZRed';
        case 'Teal':
            return 'bg-AVZTea';
        case 'Black':
            return 'bg-AVZBla';
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
    };
};

const GridBlock: React.FC<GridBlockProps> = ({ icon, header, backgroundColor, textColor, textFont, textSize, backgroundImage, linkTo, title, ariaTitle }) => {
    const backColor = handleBackgroundColor(backgroundColor);
    const txtColor = handleTextColor(textColor);
    const txtFont = handleTextFont(textFont);
    const txtSize = handleTextSize(textSize);

    return (
        <Link href={linkTo} passHref>
            <button className={`w-full h-full mxFlexCenter flex-col shadow-md relative overflow-hidden ${backColor} ${txtColor} hover:cursor-pointer`} title={title} aria-label={ariaTitle}>
                {backgroundImage && (
                    <section className='absolute inset-0 z-0 opacity-20'>
                        {backgroundImage}
                    </section>
                )}
                <section className='z-10 flex flex-col items-center gap-2 p-4'>
                    {icon && <figure className='text-4xl'>{icon}</figure>}
                    <h2 className={`${txtFont} ${txtSize}`}>{header}</h2>
                </section>
            </button>
        </Link>
    )
}

export default GridBlock;