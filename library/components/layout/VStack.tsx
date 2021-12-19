import React from 'react'
import { Fontable, font } from '@modifiers/Fontable'
import { Alignable, alignment } from '@modifiers/Alignable'
import { Spaceable, spacing } from '@modifiers/Spaceable'
import { Elementable, as } from '@modifiers/Elementable'

import className from './VStack.css'

export default function VStack(
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
