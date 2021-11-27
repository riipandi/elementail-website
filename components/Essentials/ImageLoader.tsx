interface ImageLoaderProps {
  src: string
  width: number
  quality?: number
}

const ImageLoader = ({ src, width, quality }: ImageLoaderProps) => {
  return `${src}?w=${width}&q=${quality || 75}`
}

export default ImageLoader
