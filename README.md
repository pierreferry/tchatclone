# Welcome to my chat app!

## Development

To run the app, you need to have docker installed on your machine.
IMPORTANT : I've asked a friend to run the app on his machine and he had some issues with docker. 
If you have any issue, please try to update docker to latest version or reach out to me.

To launch the dev environment, run `docker compose up` in the root folder.
Then go to http://localhost:5173 to see the app.

If you want to change styles, you can run `npm run watch:css` in another terminal.

## Libraries choices

### Front
- [vite](https://vitejs.dev/): Is the fastest bundler for web apps, it's also the most modern one. It provides a great dev experience by having the faster refresh loop I've seen.
- [react-query](https://tanstack.com/query/v3/): Is a library to handle data fetching and caching. 
- [react-hook-form](https://react-hook-form.com/): Is a library to handle forms. It might be overkill for this project.
- [prettier](https://prettier.io/): Is a library to format code and end never-ending debates about code formatting.
- [TailwindCSS](https://tailwindcss.com/): Is a library to handle styling, it's a utility-first CSS framework. It was my first time using tailwind. At first I didn't want to try because I thought it was creating "messy" component with huge classNames... This is right ! The code felt "lighter" before. But i must admit I still liked my dev experience while using this lib : the documentation is great and my IDE autocomplete helped me to quickly design an OK looking application.
- [vitetest](https://vitest.dev/): Is a library to test vite apps. I also installed @testing-library/react and some other libs to help me test my app.

### Back
- [express](https://expressjs.com/): The standard for NodeJS web apps.

## Notes

I had a lot of fun building this app. I was my first time building a backend from scratch, so I'm sure there are a lot of things I could have done better. 
I also had a lot of fun using vite and tailwindcss. I'm not sure I would use tailwindcss for a production app, but I will definitely use vite again.
