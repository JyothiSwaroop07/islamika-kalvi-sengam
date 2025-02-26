/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['www.google.com','res.cloudinary.com','img.freepik.com','encrypted-tbn0.gstatic.com','drive.google.com'],
      },
      eslint: {
        ignoreDuringBuilds: true, // This disables ESLint during production builds
      },
};

export default nextConfig;
