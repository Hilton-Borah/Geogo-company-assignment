/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],

  theme: {
    extend: {
      colors:{
        'regal-blue': '#243c5a',
        'green':'green',
        'red':'red',
        'blue':'#008bdc',
      },
      height: {
        'image': '400px',
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}

