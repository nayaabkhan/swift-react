import { styleVariants } from '@vanilla-extract/css'
import { vars } from '@themes/default.css'

export const fontVariants = styleVariants({
  heading: { fontSize: vars.fontSizes.base, fontWeight: 'bold' },
  subheading: {
    fontSize: vars.fontSizes.small,
    color: vars.colors.text.muted,
  },
})
