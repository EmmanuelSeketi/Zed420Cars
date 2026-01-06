import { useState } from 'react'

interface LazyImageProps {
  src: string
  alt?: string
  aspectClass?: string
  objectFit?: 'cover' | 'contain'
  wrapperClass?: string
}

export default function LazyImage({ src, alt = '', aspectClass = 'aspect-video', objectFit = 'contain', wrapperClass = '' }: LazyImageProps) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className={`${wrapperClass} ${aspectClass} relative overflow-hidden bg-gray-300`}>
      {!loaded && (
        <div className="absolute inset-0 bg-gray-400 animate-pulse" />
      )}

      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        className={`absolute inset-0 w-full h-full transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        style={{ objectFit: objectFit }}
      />
    </div>
  )
}
