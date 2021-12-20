import classNames from 'classnames'
import { space } from '@tokens'
import { atoms } from '@themes/atoms.css'

export type Spacing = keyof typeof space

export interface Spaceable extends JSX.Element {
  spacing: <T extends Spaceable>(this: T, spacing: Spacing) => T
}

export function spacing<T extends Spaceable>(this: T, spacing: Spacing) {
  const className = classNames(
    this.props.className,
    atoms({
      gap: spacing,
    }),
  )

  this.props = {
    ...this.props,
    className,
  }

  return this
}
