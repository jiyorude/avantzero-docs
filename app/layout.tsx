import type { Metadata } from "next";
import type { ReactNode } from 'react';
import "./css/main.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import {NextIntlClientProvider} from 'next-intl';
import {getLocale} from 'next-intl/server';

export const metadata: Metadata = {
    title: 'AvantZero | Experimental Quake III Machinima Algorithm',
    robots: 'follow, index',
    description: 'Python-based algorithm prototype for experimental, randomized and algorithmic Quake III machinima production.',
    keywords: 'algorithm, machinima, machine cinema, python, software, experimental film, game cinema, game art, algorithmic film, algorithmic machinima, avant, avantzero, Quake III arena, Quake 3, Quake III, Quake, quake mod',
    other: {
        copyright: "© A Pixelated Point of View 2025. Code licensed under MIT."
    },
};

export default async function RootLayout({ children }: { children: ReactNode }) {
    const locale = await getLocale();
    
    return (
        <html lang={locale}>
            <body className="max-w-7xl flex justify-center flex-col m-auto bg-AVZWhi">
                <NextIntlClientProvider>
                    <Header />
                        {children}
                    <Footer />
                </NextIntlClientProvider>
            </body>
        </html>
    )
}