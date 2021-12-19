import { Elementable, as } from '@modifiers/Elementable'
import { Fontable, font } from '@modifiers/Fontable'

export default function Text(text: string): Fontable & Elementable {
  const element = <span>{text}</span>

  return {
    ...element,
    font,
    as,
  }
}
