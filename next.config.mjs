/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    reactCompiler: true,
    // Pages Router에서 외부 패키지들을 자동으로 번들링 함
    bundlePagesRouterDependencies: true,
    // App Router와 Pages Router에서 특정 패키지들을 모두 번들링하지 않음
    serverExternalPackages: ["package-name"],
  },
};

export default nextConfig;
