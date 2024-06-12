/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/duken",
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
};

module.exports = nextConfig;
