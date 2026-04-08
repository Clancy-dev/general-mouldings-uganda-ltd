import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow all local images, including those with query strings
    localPatterns: [
      {
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;