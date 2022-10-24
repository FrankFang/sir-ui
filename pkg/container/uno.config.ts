import {
  defineConfig, presetAttributify, presetIcons, presetTypography, presetUno,
  transformerAttributifyJsx,
} from 'unocss'

export default defineConfig({
  safelist: 'display-hidden display-flex'.split(' '),
  layers: {
    default: 1,
    dynamic: 2,
  },
  theme: {
    colors: {
      primary: '#4285f4'
    }
  },
  rules: [
    ['dyn-block', { display: 'block' }, { layer: 'dynamic' }],
    ['dyn-flex', { display: 'flex' }, { layer: 'dynamic' }],
    ['dyn-inline-flex', { display: 'inline-flex' }, { layer: 'dynamic' }],
  ],
  shortcuts: [
    {
      'btn': 'inline-flex items-center justify-center rounded b-1 '
        + ' ' + 'text-white px-4 py-2',
    },
    [/^btn-(.*)$/, ([, c]) => {
      switch (c) {
        case 'primary':
          return 'bg-primary text-white b-primary'
        case 'secondary':
          return 'bg-white text-primary b-secondary'
        case 'danger':
          return 'bg-red-500 text-white b-red-500'
        case 'sm':
          return 'p-4px text-sm'
        default:
          return ''
      }
    }],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle'
      },
    }),
    presetTypography(),
  ],
  transformers: [
    transformerAttributifyJsx(),
  ],
})
