import React from 'react'
import { Fontable, font } from '@modifiers/Fontable'
import { Alignable, alignment } from 'library/modifiers/Alignable'
import { Spaceable, spacing } from '@modifiers/Spaceable'
import { Elementable, as } from '@modifiers/Elementable'

import className from './HStack.css'

export default function HStack(
  ...elements: JSX.Element[]
): Fontable & Alignable & Spaceable & Elementable {
  const children = React.Children.toArray(elements)

  const element = <div className={className}>{children}</div>

  return {
    ...element,
    font,
    alignment,
    spacing,
    as,
  }
}
