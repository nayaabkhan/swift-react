import { globalStyle } from '@vanilla-extract/css'
import { vars } from '@themes/default.css'

globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
})

globalStyle('*', {
  margin: 0,
})

globalStyle('html, body', {
  height: '100%',
  fontFamily: vars.fonts.sans,
  backgroundColor: vars.colors['surface.lowest'],
})

globalStyle('body', {
  margin: vars.space.large,
  lineHeight: '1.5',
  WebkitFontSmoothing: 'antialiased',
})

globalStyle('img, picture, video, canvas, svg', {
  display: 'block',
  maxWidth: '100%',
})

globalStyle('input, button, textarea, select', {
  font: 'inherit',
})

globalStyle('p, h1, h2, h3, h4, h5, h6', {
  overflowWrap: 'break-word',
})

globalStyle('#__next ', {
  isolation: 'isolate',
})
