module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        wiggle: "wiggle 200ms ease-in-out"
      },
    }, fontFamily:{
      'poppins': ['Poppins', 'sans-serif'],
      'changa' :['Changa', 'sans-serif']}
  },
  plugins: [],
}
