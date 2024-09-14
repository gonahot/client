import type { ImageLoaderProps } from 'next/image'

export default function customImageLoader({ src, width, quality }: ImageLoaderProps): string {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_PATH || ''
    if (src.startsWith('http')) {
        return src
    }
    return `${baseUrl}${src}?w=${width}&q=${quality || 75}`
}