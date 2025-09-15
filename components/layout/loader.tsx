"use client";
import React from 'react';
import { useState, useEffect } from 'react';

const Loader: React.FC = () => {
    const [loading, SetLoading] = useState(true);

    useEffect(() => {
        if (sessionStorage.getItem('siteLoaded')) {
            SetLoading(false);
            return;
        };

        const handleLoad = () => {
            SetLoading(false);
            sessionStorage.setItem("siteLoaded", "true");
        };

        if (document.readyState === "complete") {
            handleLoad();
        } else {
            window.addEventListener("load", handleLoad);
        }

        return () => window.removeEventListener("load", handleLoad);
    }, []);

if (!loading) return null;

return (
    <section className="fixed inset-0 z-[9999] flex items-center justify-center bg-AVZWhi text-AVZBla">
      <h1 className="text-3xl font-AVZLight tracking-widest uppercase animate-pulse">Loading AvantZero...</h1>
    </section>
);
}

export default Loader