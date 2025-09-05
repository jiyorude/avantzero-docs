import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'AvantZero | Depth Generator',
    robots: 'follow, noindex',
    other: {
        copyright: "© A Pixelated Point of View 2025. Code licensed under MIT."
    },
};
const DepthGenerator: React.FC = () => {
    return (
        <h2>Depth Generator Page!</h2>
    )
};

export default DepthGenerator;