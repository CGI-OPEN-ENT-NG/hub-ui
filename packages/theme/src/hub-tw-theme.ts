const hubTwConfig = {
    extend: {
        backgroundImage: {
          'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
          'gradient-conic':
            'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        },
        colors: {
          'blue': '#01BBD4',
          'dark-gray': '#989898',
          'light-blue': '#F3FCFE',
          'entities-light-blue': '#01BBD429',
          'users-light-blue': '#01BBD429',
          'users-yellow': '#FFC900',
          'users-yellow-light': '#FFF7DA'  
        }
    },
    fontFamily: {
      'atkinson': ['Atkinson Hyperlegible', 'Arial', 'sans-serif'],
      'helvetica': ['Helvetica'],
      'archer': ['Archer']
    }
}


export { hubTwConfig as HubTwConfig };
