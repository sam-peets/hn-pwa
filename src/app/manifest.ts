import type { MetadataRoute } from 'next'

export const dynamic = "force-static";
export default function manifest(): MetadataRoute.Manifest {
  return {
    "name": "HN PWA",
    "short_name": "HN PWA",
    "description": "HN PWA is a PWA-installable frontend for Hacker News using the Firebase API.",
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
      },
      {
        "src": "/web-app-manifest-512x512.png",
        "sizes": "512x512",
        "type": "image/png",
        "purpose": "any"
      }
    ],
    "background_color": "#000000",
    "theme_color": "#000000",
    "display": "standalone",
    "id": "/",
    "start_url": "/",
    "launch_handler": {
      "client_mode": "focus-existing"
    },
    "orientation": "natural",
    "screenshots": [],
    "categories": ["social", "news"],
    "dir": "auto",
    "scope": "https://hn.sampeets.com",
    "lang": "en"
  }
}