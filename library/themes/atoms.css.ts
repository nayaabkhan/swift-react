import { alignments, colors, fontSizes, radii, space } from '@tokens'
import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles'

const commonProperties = defineProperties({
  properties: {
    display: ['block', 'flex', 'grid'],
    borderRadius: radii,
    overflow: ['visible', 'hidden'],

    flexDirection: ['row', 'column', 'row-reverse', 'column-reverse'],
    flexGrow: ['1', 'none'],
    alignItems: alignments,
    gap: space,

    margin: { auto: 'auto', ...space },
    marginInline: { auto: 'auto', ...space },
    marginBlock: { auto: 'auto', ...space },
    marginInlineStart: { auto: 'auto', ...space },
    marginInlineEnd: { auto: 'auto', ...space },
    marginBlockStart: { auto: 'auto', ...space },
    marginBlockEnd: { auto: 'auto', ...space },

    padding: space,
    paddingInline: space,
    paddingBlock: space,
    paddingInlineStart: space,
    paddingInlineEnd: space,
    paddingBlockStart: space,
    paddingBlockEnd: space,

    backgroundColor: colors,
    color: colors,

    fontSize: fontSizes,
    fontWeight: ['normal', 'bold'],
  },
})

const rtlProperties = defineProperties({
  conditions: {
    ltr: {},
    rtl: { selector: '[dir="rtl"] &' },
  },
  defaultCondition: 'ltr',

  properties: {
    transform: ['scale(-1)', 'scale(1)'],
  },
})

export const atoms = createSprinkles(commonProperties, rtlProperties)

export type Atoms = Parameters<typeof atoms>[0]
