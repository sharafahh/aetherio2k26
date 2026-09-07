const isGithubPages = process.env.GITHUB_PAGES === 'true';
const githubPagesBasePath = '/aetherio2k26';

/** @type {import('next').NextConfig} */
const nextConfig = {
  ...(isGithubPages
    ? {
        output: 'export',
        trailingSlash: true,
        basePath: githubPagesBasePath,
        assetPrefix: githubPagesBasePath,
      }
    : {}),
  images: {
    domains: ['localhost'],
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  env: {
    NEXT_PUBLIC_URL:
      process.env.URL ||
      process.env.VERCEL_URL ||
      process.env.NEXT_PUBLIC_SITE_URL ||
      (isGithubPages ? `https://sharafahh.github.io${githubPagesBasePath}` : 'http://localhost:3000'),
    NEXT_PUBLIC_BASE_PATH: isGithubPages ? githubPagesBasePath : '',
  },
};

module.exports = nextConfig;
