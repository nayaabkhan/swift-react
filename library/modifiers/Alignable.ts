import classNames from 'classnames'
import { alignments } from '@tokens'
import { atoms } from '@themes/atoms.css'

export type Alignment = keyof typeof alignments

export interface Alignable extends JSX.Element {
  alignment: <T extends Alignable>(this: T, alignment: Alignment) => T
}

export function alignment<T extends Alignable>(this: T, alignment: Alignment) {
  const className = classNames(
    this.props.className,
    atoms({
      alignItems: alignment,
    }),
  )

  this.props = {
    ...this.props,
    className,
  }

  return this
}
