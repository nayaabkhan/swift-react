import { style } from '@vanilla-extract/css'
import { vars } from '@themes/default.css'
import { atoms } from '@themes/atoms.css'

export const listStyles = atoms({
  padding: 'none',
  borderRadius: 'md',
  backgroundColor: 'surface.highest',
})

export const itemStyles = style([
  atoms({
    display: 'block',
    paddingInline: 'large',
    paddingBlock: 'small',
  }),
  {
    selectors: {
      [`${listStyles} > & + &`]: {
        borderTop: `1px solid ${vars.colors['border.list']}`,
      },
    },
  },
])

export const arrowStyles = atoms({
  marginInlineStart: 'auto',
  transform: {
    rtl: 'scale(-1)',
  },
})
