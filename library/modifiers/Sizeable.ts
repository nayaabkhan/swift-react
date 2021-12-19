export interface Sizeable extends JSX.Element {
  size: <T extends Sizeable>(this: T, width: number, height?: number) => T
}

export function size<T extends Sizeable>(
  this: T,
  width: number,
  height?: number,
) {
  if (height === undefined) {
    height = width
  }

  this.props = { ...this.props, width, height, layout: 'fixed' }
  return this
}
