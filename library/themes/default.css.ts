import { createGlobalTheme } from '@vanilla-extract/css'
import * as tokens from '@tokens'

export const vars = createGlobalTheme(':root', {
  space: tokens.space,
  rounded: tokens.radii,
  fonts: tokens.fonts,
  fontSizes: tokens.fontSizes,
  colors: tokens.colors,
})
