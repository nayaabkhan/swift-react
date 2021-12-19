import { fontVariants } from './Fontable.css'

export type FontVariant = 'heading' | 'subheading'

export interface Fontable extends JSX.Element {
  font: <T extends Fontable>(this: T, font: FontVariant) => T
}

export function font<T extends Fontable>(this: T, font: FontVariant): T {
  this.props = {
    ...this.props,
    className: fontVariants[font],
  }

  return this
}
