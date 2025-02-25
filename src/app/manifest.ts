import type { MetadataRoute } from 'next'

export const dynamic = "force-static";
export default function manifest(): MetadataRoute.Manifest {
  return {
    "name": "HN PWA",
    "short_name": "HN PWA",
    "icons": [
      {
        "src": "/hn-pwa/web-app-manifest-192x192.png",
        "sizes": "192x192",
        "type": "image/png",
        "purpose": "maskable"
      },
      {
        "src": "/hn-pwa/web-app-manifest-512x512.png",
        "sizes": "512x512",
        "type": "image/png",
        "purpose": "maskable"
      }
    ],
    "display": "standalone",
    "id": "https://sampeets.com/hn-pwa/",
    "start_url": "https://sampeets.com/hn-pwa/"
  }
}