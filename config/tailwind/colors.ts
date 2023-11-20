// Must be defined like r g b in CSS
const transparencyColors = [
  'inverse',
  'accent-dark',
  'peachy-pink',
  'lavender',
  'soft-green',
  'chocolate-brown',
  'pale-pink',
  'creamy-white',
  'sky-blue',
  'sunshine-yellow',
  'minty-green',
  'bubblegum-purple',
  'tropical-orange',
  'light-peach',
  'soft-rose',
  'blush',
  'deep-pink',
  'light-lavender',
  'pastel-purple',
  'orchid',
  'royal-purple',
  'mint-green',
  'pale-aqua',
  'teal',
  'deep-green',
  'light-brown',
  'caramel',
  'rustic-brown',
  'espresso',
  'baby-pink',
  'cotton-candy',
  'bubblegum',
  'raspberry-pink',
  'off-white',
  'ivory',
  'pearl-white',
  'vanilla',
  'light-sky-blue',
  'soft-blue',
  'robins-egg-blue',
  'deep-sky-blue',
  'light-yellow',
  'lemon-yellow',
  'goldenrod',
  'light-mint',
  'sunflower-yellow',
  'fresh-green',
  'spring-green',
  'vibrant-green',
  'lilac',
  'purple',
  'deep-purple',
  'electric-purple',
  'light-orange',
  'peach',
  'tangerine',
  'coral-orange',
  'accent',
  'accent-dark',
  'on-accent',
] as const
type TransparencyColor = (typeof transparencyColors)[number]

const normalColors = [
  'transparent',
  'baby-pink',
  'background',
  'toolbar',
  'divider',
  'primary-txt',
  'secondary-txt',
  'tertiary-txt',
  'scrollbar-bg',
  'scrollbar-thumb',
  'selection',
  'illustrations-shadow',
  'img-drop-shadow',
] as const
type NormalColor = (typeof normalColors)[number]

// Used in gradients and shadows
const rainbowColors = ['transparent', 'brand', 'blue', 'green', 'yellow', 'orange', 'red', 'purple'] as const
type RainbowColor = (typeof rainbowColors)[number]
type GradientColor = `gradient-${RainbowColor}`
type ShadowColor = `shadow-${RainbowColor}`

const gradientColors: Array<GradientColor> = rainbowColors.map((it) => `gradient-${it}` as GradientColor)

const shadowColors: Array<ShadowColor> = rainbowColors.map((it) => `shadow-${it}` as ShadowColor)

const colorToTransparencyTailwindVar = (colorName: TransparencyColor) => ({
  [colorName]: `rgba(var(--color-${colorName}) / <alpha-value>)`,
})

const colorToTailwindVar = (colorName: NormalColor | GradientColor | ShadowColor) => ({
  [colorName]: `var(--color-${colorName})`,
})

const reduceObjArray = <T>(objs: Array<T>) => objs.reduce((r, c) => Object.assign(r, c), {})

export const colors = {
  ...reduceObjArray(transparencyColors.map(colorToTransparencyTailwindVar)),
  ...reduceObjArray(normalColors.map(colorToTailwindVar)),
  ...reduceObjArray(gradientColors.map(colorToTailwindVar)),
  ...reduceObjArray(shadowColors.map(colorToTailwindVar)),
}
