import classNames from 'classnames'
import { fontVariants } from './Fontable.css'

export type FontVariant = keyof typeof fontVariants

export interface Fontable extends JSX.Element {
  font: <T extends Fontable>(this: T, font: FontVariant) => T
}

export function font<T extends Fontable>(this: T, font: FontVariant): T {
  const className = classNames(this.props.className, fontVariants[font])

  this.props = {
    ...this.props,
    className,
  }

  return this
}
