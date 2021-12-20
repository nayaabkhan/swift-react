import { atoms } from '@themes/atoms.css'
import { radii } from '@tokens'
import classNames from 'classnames'

type Radii = keyof typeof radii

export interface Roundable extends JSX.Element {
  rounded: <T extends Roundable>(this: T, radius: Radii) => T
}

export function rounded<T extends Roundable>(this: T, radius: Radii) {
  const className = classNames(
    this.props.className,
    atoms({
      borderRadius: radius,
      overflow: 'hidden',
    }),
  )

  this.props = {
    ...this.props,
    className,
  }

  return this
}
