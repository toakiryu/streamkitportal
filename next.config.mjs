import createNextIntlPlugin from "next-intl/plugin";
import createMDX from '@next/mdx'

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // basePath: "/" // Currently you need to set the `baseUrl` yourself

  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
      },
    ],
  },

  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
     options: {
            svgo: false, // 圧縮無効
          },
        },
      ],
    });
    // config.resolve.fallback = { fs: false }; // fs
    return config;
  },
  // webpack5: true, // fs

  images: {
    disableStaticImages: true, // importした画像の型定義設定を無効にする
  },

};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
})

export default withMDX(withNextIntl(nextConfig));
