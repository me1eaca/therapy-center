import { fileURLToPath } from "node:url"
import { dirname } from "node:path"

const projectRoot = dirname(fileURLToPath(import.meta.url))

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: projectRoot,
  },
}

export default nextConfig
