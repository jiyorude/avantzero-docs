import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'AvantZero | Project Manager',
    robots: 'follow, noindex',
    other: {
        copyright: "© A Pixelated Point of View 2025. Code licensed under MIT."
    },
};

const ProjectManager: React.FC = () => {
    return (
        <h2>Project Manager page!</h2>
    )
};

export default ProjectManager;