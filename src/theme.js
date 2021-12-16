import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const fonts = { mono: `'Menlo', monospace` }

const breakpoints = createBreakpoints({
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em',
})

const theme = extendTheme({
  colors: {
    brand: {
      
    },
    black: '#000000',
    gray: {
      50: '#f8f0f2',
      100: '#d9d9d9',
      200: '#bfbfbf',
      300: '#a6a6a6',
      400: '#8c8c8c',
      500: '#737373',
      600: '#595959',
      700: '#404040',
      800: '#262626',
      900: '#120b0d',
      1000: '#121212'
    },
    blue: {
      50: '#e7f5fa',
      100: '#d1dae1',
      200: '#b5c1ca',
      300: '#98a9b3',
      400: '#7d909d',
      500: '#637783',
      600: '#4c5c67',
      700: '#35424a',
      800: '#1d282e',
      900: '#040e16',
    },
    yellow: {
      50: '#fff3de',
      100: '#f7ddb9',
      200: '#edc690',
      300: '#e5af66',
      400: '#dd983c',
      500: '#c37e22',
      600: '#986219',
      700: '#6d4610',
      800: '#432904',
      900: '#1c0c00',
      1000: '#ffaf5f',
    },
    orange: {
      50: '#fff4dc',
      100: '#ffe0b1',
      200: '#fbcc82',
      300: '#fab752',
      400: '#f8a323',
      500: '#df890c',
      600: '#ad6b05',
      700: '#7c4c02',
      800: '#4b2e00',
      900: '#1d0e00',
    },
  },
  fonts,
  breakpoints,
  icons: {
    logo: {
      path: (
        <svg
          width="3000"
          height="3163"
          viewBox="0 0 3000 3163"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="3000" height="3162.95" fill="none" />
          <path
            d="M1470.89 1448.81L2170 2488.19H820V706.392H2170L1470.89 1448.81ZM1408.21 1515.37L909.196 2045.3V2393.46H1998.84L1408.21 1515.37Z"
            fill="currentColor"
          />
        </svg>
      ),
      viewBox: '0 0 3000 3163',
    },
  },
})

export default theme
