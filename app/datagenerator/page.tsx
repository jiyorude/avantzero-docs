import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'AvantZero | Data Generator',
    robots: 'follow, noindex',
    other: {
        copyright: "© A Pixelated Point of View 2025. Code licensed under MIT."
    },
};

const DataGenerator: React.FC = () => {
    return (
        <h2>Data Generator Page!</h2>
    )
};

export default DataGenerator;