import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'AvantZero | Error Database',
    robots: 'follow, noindex',
    other: {
        copyright: "© A Pixelated Point of View 2025. Code licensed under MIT."
    },
};

const ErrorDatabase: React.FC = () => {
    return (
        <h2>Error Database!</h2>
    )
};

export default ErrorDatabase;