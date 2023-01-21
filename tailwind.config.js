const colors = require('tailwindcss/colors');

/**
 * @type { import('tailwindcss').Config }
 */
module.exports = {
  content: ['./theme/**/*.ftl'],
  experimental: {
    optimizeUniversalDefaults: true,
  },
  plugins: [require('@tailwindcss/forms')],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F5FBFF',
          100: '#E7F5FE',
          200: '#097CC3',
          300: '#086BAB',
          400: '#065D93',
          500: '#054D79',
          600: '#043D60',
          700: '#042E49',
          800: '#031F30',
          900: '#011018',
        },
        secondary: colors.gray,
        danger: colors.rose,
        success: colors.green,
        warning: colors.yellow,

        provider: {
          bitbucket: '#0052CC',
          facebook: '#1877F2',
          github: '#181717',
          gitlab: '#FC6D26',
          google: '#4285F4',
          instagram: '#E4405F',
          linkedin: '#0A66C2',
          microsoft: '#5E5E5E',
          oidc: '#F78C40',
          openshift: '#EE0000',
          paypal: '#00457C',
          stackoverflow: '#F58025',
          twitter: '#1DA1F2',
        },
      },
    },
  },
};
