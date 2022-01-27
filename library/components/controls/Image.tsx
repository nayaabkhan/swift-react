import { Roundable, rounded } from '@modifiers/Roundable'
import { Sizeable, size } from '@modifiers/Sizeable'
import NextImage from 'next/image'

export default function Image(
  path: string,
  alt?: string,
): Sizeable & Roundable {
  const element = <NextImage src={path} alt={alt} />

  return {
    ...element,
    size,
    rounded,
  }
}
