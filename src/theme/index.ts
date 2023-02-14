const baseColors = {
  'primary-light': '#996DFF',
  'primary-mid': '#8257E5',
  'primary-dark': '#633BBC',
  'primary-low': '#271A45',

  'secondary-light': '#6A80FF',
  'secondary-mid': '#4863F7',
  'secondary-dark': '#3249CB',
  'secondary-low': '#182049',

  'third-light': '#00B37E',
  'third-mid': '#00875F',
  'third-dark': '#015F43',
  'third-low': '#00291D',

  'red-light': '#FC4737',
  'red-mid': '#D73628',
  'red-dark': '#AD1E12',
  'red-low': '#42110D',

  'success-light': '#04D361',
  'success-base': '#1B873F',
  'success-low': '#051B0D',

  'danger-light': '#F75A68',
  'danger-base': '#CC2937',
  'danger-low': '#2D090C',

  'warning-light': '#FBA94C',
  'warning-base': '#EB8A1D',
  'warning-low': '#2E1B06',

  'new-light': '#1EF7D0',
  'new-base': '#07847E',
  'new-low': '#163840',

  white: '#FFFFFF',
  black: '#000000',

  'grey-100': '#E1E1E6',
  'grey-200': '#C4C4CC',
  'grey-300': '#8D8D99',
  'grey-400': '#7C7C8A',
  'grey-500': '#505059',
  'grey-600': '#323238',
  'grey-700': '#29292E',
  'grey-800': '#202024',
  'grey-900': '#121214',
  'grey-950': '#09090A',
}

const aliases = {
  'text-title': baseColors['white'],
  'text-base': baseColors['grey-200'],
  'text-support': baseColors['grey-300'],
  placeholder: baseColors['grey-400'],
  'inputs-icons': baseColors['grey-500'],
  'shape-tertiary': baseColors['grey-600'],
  'shape-secondary': baseColors['grey-700'],
  'shape-primary': baseColors['grey-800'],
  'color-background': baseColors['grey-900'],
}

export const theme = {
  colors: { ...baseColors, ...aliases },

  space: {
    px: '1px',
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    7: '1.75rem',
    8: '2rem',
    10: '2.5rem',
    12: '3rem',
    16: '4rem',
    20: '5rem',
    40: '10rem',
    64: '16rem',
    80: '20rem',
  },

  fontSizes: {
    xxs: '0.625rem',
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '4xl': '2rem',
    '5xl': '2.25rem',
    '6xl': '3rem',
    '7xl': '4rem',
    '8xl': '4.5rem',
    '9xl': '6rem',
  },

  fonts: {
    default: 'Roboto, sans-serif',
    highlight: 'Roboto, sans-serif',
    reading: 'Spectral, serif',
    code: 'Fira code, monospace',
  },

  fontWeights: {
    regular: '400',
    medium: '500',
    bold: '700',
  },

  lineHeights: {
    shorter: '125%',
    short: '140%',
    base: '160%',
    tall: '180%',
  },

  borderWidths: {
    thin: '1px',
    medium: '1.5px',
    thick: '2px',
    heavy: '4px',
  },

  radius: {
    xs: '2.5px',
    sm: '5px',
    md: '10px',
    lg: '20px',
    full: '99999px',
  },

  opacity: {
    default: '100%',
    semiOpaque: '90%',
    intense: '75%',
    medium: '50%',
    light: '25%',
    semiTransparent: '10%',
  },
}
