import { Sizeable, size } from '@modifiers/Sizeable'
import NextImage from 'next/image'

export default function Image(path: string): Sizeable {
  const element = <NextImage src={path} />

  return {
    ...element,
    size,
  }
}
