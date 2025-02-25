
import type {
  MetadataRoute
} from 'next'
export default function manifest(): MetadataRoute.Manifest {
  return {
    "name": "HN PWA",
    "short_name": "HN PWA",
    "icons": [
      {
        "src": "/web-app-manifest-192x192.png",
        "sizes": "192x192",
        "type": "image/png",
        "purpose": "maskable"
      },
      {
        "src": "/web-app-manifest-512x512.png",
        "sizes": "512x512",
        "type": "image/png",
        "purpose": "maskable"
      }
    ],
    "display": "standalone"
  }
}