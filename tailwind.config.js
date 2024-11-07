/** @type {import('tailwindcss').Config} */
module.exports =
{
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme:
  {

    extend: 
    {
      screens: {
        'mp': '1200px',
      },
      colors: 
      {
        cor:
        {
          4: '#ffffff',
          3: '#203562',
          2: '#1e579c',
          1: '#0098db',
          0: '#201533', 
        },
      }
    },
  },
  plugins: [],
} 

const apiUrl = process.env.REACT_APP_API_URL + "/api/endpoint";

// Agora, quando você for fazer uma requisição para esse endpoint:
fetch(apiUrl)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));