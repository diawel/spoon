import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    theme_color: '#fff',
    background_color: '#fff',
    display: 'standalone',
    scope: '/',
    start_url: '/',
    name: 'Spoon',
    short_name: 'Spoon',
    description:
      '\u6bce\u65e5\u3092\u3072\u3093\u3084\u308a\u8a18\u9332\u3057\u307e\u3059\u3002',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
