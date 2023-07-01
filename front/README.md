# Welcome to my chat app!

## Development

This app has been made using `NodeJS-v18.16.1` (the latest atm).
Make sure you have it installed before launching the dev environment.

If you have `nvm` installed, you can run `nvm use` to use the correct version.

To launch the dev environment, run `npm run dev` in the `front` folder.
If you want to change styles, you can run `npm run watch:css` in another terminal.

## Libraries choices

- [vite](https://vitejs.dev/): Is the fastest bundler for web apps, it's also the most modern one. It provides a great dev experience by having the faster refresh loop I've seen.
- [react-query](https://tanstack.com/query/v3/): Is a library to handle data fetching and caching. 
- [react-hook-form](https://react-hook-form.com/): Is a library to handle forms.
- [prettier](https://prettier.io/): Is a library to format code and end never-ending debates about code formatting.
- [TailwindCSS](https://tailwindcss.com/): Is a library to handle styling, it's a utility-first CSS framework. It was my first time using tailwind. At first I didn't want to try because I thought it was creating "messy" component with huge classNames... This is right ! The code felt "lighter" before. But i must admit I still liked my dev experience while using this lib : the documentation is great and my IDE autocomplete helped me to quickly design an OK looking application.
