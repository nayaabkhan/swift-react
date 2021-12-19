import { style } from '@vanilla-extract/css'
import { vars } from '@themes/default.css'

export const listStyles = style({
  padding: 0,
  background: 'white',
  borderRadius: vars.rounded.md,
})

export const itemStyles = style({
  display: 'block',
  paddingInline: vars.space.large,
  paddingBlock: vars.space.small,

  selectors: {
    [`${listStyles} > & + &`]: {
      borderTop: `1px solid ${vars.colors.border.list}`,
    },
  },
})

export const arrowStyles = style({
  marginInlineStart: 'auto',
  selectors: {
    '[dir="rtl"] &': {
      transform: 'scaleX(-1)',
    },
  },
})
