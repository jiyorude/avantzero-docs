import React, { ReactElement } from 'react';

interface GridBlockProps {
    icon: ReactElement;
    header: string;
    backgroundColor: 'Red' | 'Teal' | 'Black';
    textColor: 'White' | 'Teal' | 'Red' | 'Black';
    backgroundImage: ReactElement;
}

const handleBackgroundColor = (choice: GridBlockProps['backgroundColor']) => {
    switch(choice) {
        case 'Red':
    }
}

const GridBlock: React.FC<GridBlockProps> = ({ icon, header, backgroundColor, textColor, backgroundImage }) => {
    return (
        <h1>Hello World</h1>
    )

}

export default GridBlock;