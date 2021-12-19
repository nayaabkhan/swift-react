import type { ReactHTML } from 'react'

export interface Elementable extends JSX.Element {
  as: <T extends Elementable>(this: T, type: keyof ReactHTML) => T
}

export function as<T extends Elementable>(this: T, type: keyof ReactHTML) {
  this.type = type
  return this
}
