import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'AvantZero | Requirements',
    robots: 'follow, noindex',
    other: {
        copyright: "© A Pixelated Point of View 2025. Code licensed under MIT."
    },
};

const Requirements: React.FC = () => {
    return (
        <h2>Requirements page!</h2>
    )
}

export default Requirements;