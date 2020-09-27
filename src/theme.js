import { theme } from '@chakra-ui/core'

const customTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    brand: {
      50: '#dcf3ff',
      100: '#aedaff',
      200: '#7cc0ff',
      300: '#4aa7ff',
      400: '#1a8eff',
      500: '#0074e6',
      600: '#005ab4',
      700: '#004182',
      800: '#002751',
      900: '#000e21',
    },
  },
  fonts: {
    ...theme.fonts,
    body: 'Roboto, sans-serif',
    logo: 'Lato, sans-serif',
  },
}

export default customTheme
