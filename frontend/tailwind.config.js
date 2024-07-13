/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'Open Sans': ["Open Sans"]
      },
      fontSize: {
        base: '0.7rem',
      },
      lineHeight: {
        base: '1.5rem',
      },
      colors: {
        Splenzert: {
          primary: {
            blue: '#00338D',
            combat_blue: '#1E49E2',
            white: '#FFFFFF',
          },
          secondary: {
            light_blue: '#ACEAFF',
            pacific_blue: '#00B8F5',
            dark_blue: '#0C233C',
            purple: '#7213EA',
            pink: '#FD349C',
          },
          tertiary: {
            blue: '#76D2FF',
            dark_purple: '#510DBC',
            light_purple: '#B497FF',
            dark_pink: '#B497FF',
            light_pink: '#FFA3DA',
            light_green: '#63EBDA',
            dark_green: '#098E7E',
            green: '#00C0AE',
          },

          gray: {
            0: '#000000',
            1: '#333333',
            2: '#666666',
            3: '#989898',
            4: '#FFFFFF',
            5: '#D1D3D6',
            6: '#E5E5E5',
            7: '#F2F2F2',
            8: '#FAFAFA',
            9: '#272E33FA',
            10: '#FFFFFF',
          },
          zIndex:{
            "7":"7",
            "6":"6",
            "5":"5",
            "4":"4",
            "3":"3",
            "2":"2",
            "1":"1"
          },
          alert: {
            red: '#ED2124',
            light_red: '#FCDEDE',
            yellow: '#D4B029',
            light_yellow: '#FCDEDE',
            green: '#269924',
            light_green: '#DEF0DE',
          },
        },
      },

      gridColumn: {
        'span-1.3': 'span 1.3 / span 1.3',
        'span-1.5': 'span 1.5 / span 1.5',
        'span-2': 'span 2 / span 2',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: ['./src/**/*.tsx'],
};


