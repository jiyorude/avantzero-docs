import type { NextConfig } from "next";
import { i18n } from './next-i18next.config.js'; // <-- import i18n config

const nextConfig: NextConfig = {
  i18n,
  reactStrictMode: true, 
};

export default nextConfig;
