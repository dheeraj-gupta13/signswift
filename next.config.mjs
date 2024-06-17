/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
  },
  webpack: (config) => {
    config.resolve.alias.canvas = false;
    // config.module.rules.push({
    //   test: /\.pdf$/,
    //   use: {
    //     loader: "file-loader",
    //     options: {
    //       name: "[path][name].[ext]",
    //     },
    //   },
    // });
    config.module.rules.push({
      test: /\.(pdf)$/,
      type: "asset/resource",
    });

    return config;
  },
  reactStrictMode: false,
};

export default nextConfig;
