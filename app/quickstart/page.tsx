import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'AvantZero | Quickstart',
    robots: 'follow, noindex',
    other: {
        copyright: "© A Pixelated Point of View 2025. Code licensed under MIT."
    },
};


const Quickstart: React.FC = () => {
    return (
        <h2>Quickstart Page!</h2>
    )
};

export default Quickstart;