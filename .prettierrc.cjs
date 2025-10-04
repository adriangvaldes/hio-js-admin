module.exports = {
  printWidth: 100, // Your requested maximum line width
  tabWidth: 2, // Use 2 spaces for tabs
  singleQuote: false, // Use single quotes instead of double quotes
  semi: true, // Add semicolons at the end of statements
  trailingComma: 'es5', // Add trailing commas where valid in ES5 (objects, arrays, etc.)

  plugins: [
    'prettier-plugin-tailwindcss', // This is the key for sorting Tailwind classes
  ],
};
