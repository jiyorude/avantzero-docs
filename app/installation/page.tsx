import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'AvantZero | Installation',
    robots: 'follow, noindex',
    other: {
        copyright: "© A Pixelated Point of View 2025. Code licensed under MIT."
    },
};

const Installation: React.FC = () => {
    return (
        <h2>Installation page!</h2>
    )
};

export default Installation;