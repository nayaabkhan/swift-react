import { vars } from '@themes/default.css'

export type Spacing = 'loose' | 'looser' | 'loosest'

export interface Spaceable extends JSX.Element {
  spacing: <T extends Spaceable>(this: T, spacing: Spacing) => T
}

const spacingMap: { [key in Spacing]: string } = {
  loose: vars.space.small,
  looser: vars.space.medium,
  loosest: vars.space.large,
}

export function spacing<T extends Spaceable>(this: T, spacing: Spacing) {
  this.props = {
    ...this.props,
    style: { ...this.props.style, gap: spacingMap[spacing] },
  }

  return this
}
