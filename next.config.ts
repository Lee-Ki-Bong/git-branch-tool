import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ["@svgr/webpack"] // Webpack에서 SVGR 처리
    })

    return config
  },
  experimental: {
    // nextjs 최신 요구사항에 맞게 experimental 안에 설정해야 경고가 발생하지 않음
    turbo: {
      rules: {
        "*.svg": {
          loaders: ["@svgr/webpack"],
          as: ".js"
        }
      }
    }
  }
}

export default nextConfig
