import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'AvantZero | License & Credits',
    robots: 'follow, noindex',
    other: {
        copyright: "© A Pixelated Point of View 2025. Code licensed under MIT."
    },
};

const LicenseCredits: React.FC = () => {
    return (
        <h2>License and Credit page!</h2>
    )
}

export default LicenseCredits;