import type { Config } from 'tailwindcss'
import themes from 'daisyui/src/theming/themes'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    }
  },
  plugins: [
    require('daisyui')
  ],
  daisyui: {
    themes: [
      {
        light: {
          ...themes.light,
          'base-100': '#EDE4F7',
          'base-content': '#050307',
          primary: '#845EB5',
          'primary-content': '#FAF8FC',
          secondary: '#BA98E7',
          accent: '#9862DF'
        }
      },
      {
        dark: {
          ...themes.dark,
          'base-100': '#11081B',
          'base-content': '#FAF8FC',
          primary: '#704AA1',
          'primary-content': '#FAF8FC',
          secondary: '#3A1867',
          accent: '#56209D'
        }
      }
    ]
  }
}
export default config
