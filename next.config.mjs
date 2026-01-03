/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your existing settings
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  
  // Add this for Docker/Production
  output: 'standalone', 
}

export default nextConfig