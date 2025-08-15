import type { Metadata } from "next";
import type { ReactNode } from 'react';
import "./css/main.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { useTranslation } from 'next-i18next';

export const metadata: Metadata = {
    title: 'AvantZero | Experimental Quake III Machinima Algorithm',
    robots: 'follow, index',
    description: 'Python-based algorithm prototype for experimental, randomized and algorithmic Quake III machinima production.',
    keywords: 'algorithm, machinima, machine cinema, python, software, experimental film, game cinema, game art, algorithmic film, algorithmic machinima, avant, avantzero, Quake III arena, Quake 3, Quake III, Quake, quake mod',
    other: {
        copyright: "© A Pixelated Point of View 2025. Code licensed under MIT."
    },
};

export default function Layout({ children }: { children: ReactNode }) {
    const { t } = useTranslation('common');
    
    return (
        <html lang="en">
            <body className="max-w-7xl flex justify-center flex-col m-auto bg-AVZWhi">
                <Header t={t} />
                {children}
                <Footer t={t} />
            </body>
        </html>
    )
}