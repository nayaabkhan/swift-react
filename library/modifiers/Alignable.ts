import type { Property } from 'csstype'

export type Alignment = 'leading' | 'center' | 'trailing'

export interface Alignable extends JSX.Element {
  alignment: <T extends Alignable>(this: T, alignment: Alignment) => T
}

const alignmentMap: { [key in Alignment]: Property.AlignItems } = {
  leading: 'flex-start',
  center: 'center',
  trailing: 'flex-end',
}

export function alignment<T extends Alignable>(this: T, alignment: Alignment) {
  this.props = {
    ...this.props,
    style: { ...this.props.style, alignItems: alignmentMap[alignment] },
  }

  return this
}
