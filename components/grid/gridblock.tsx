import React, { ReactElement } from 'react';

interface GridBlockProps {
    icon?: ReactElement;
    header: string;
    backgroundColor: 'Red' | 'Teal' | 'Black' | 'Grey';
    textColor: 'White' | 'Teal' | 'Red' | 'Black';
    backgroundImage?: ReactElement;
    titleString?: string;
    ariaLabel: string;
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
        default:
            return 'bg-AVZTea';
    }
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
    }
};


const GridBlock: React.FC<GridBlockProps> = ({ icon, header, backgroundColor, textColor, backgroundImage, titleString, ariaLabel }) => {
    const bgColor = handleBackgroundColor(backgroundColor);
    const txtColor = handleTextColor(textColor);
    
    return (
        <h1>Hello World</h1>
    )

}

export default GridBlock;