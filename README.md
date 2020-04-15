# tim-keeler-gatsby

This is Tim's website written using GatsbyJS. The next generation amazing website for Tim!

## Development

To run this locally:

1. Clone this repository locally: `git clone <url>`
2. Fill in the values in `.env.example` and then copy that file to `.env.production` and `.env.development`
3. Install dependencies: `npm i`
4. Run `npm run develop` to start developing, go to [localhost:8000](http://localhost:8000) to view your local copy

Changes are automatically reflected in your browser when your are developing locally. No need to manually refresh!

This website runs on the Node and npm versions specified in netlify.toml Make sure you have the correct versions installed locally. I suggest using [nvm](https://github.com/nvm-sh/nvm) to install Node and get the correct version.

### Editing the bio

The bio paragraphs and information are sourced from `src/content/bio.md`. Simply edit that file with new information to the about page. This can even be done from the GitHub UI! 


## Deployment

Simply push to the master branch! This site is deployed using Netlify and a new version is deployed whenever a commit is made on master.


## Tech Used

- [ReactJS](https://reactjs.org/)
- [GatsbyJS](https://www.gatsbyjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Netlify](https://www.netlify.com/)
