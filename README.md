# Thanks for checking out my Marko template

# Installation

```
npx @marko/create marko-app --template basic
cd marko-app
npm install
npm run dev
```

## Overview

This project is powered by [@marko/run](https://github.com/marko-js/run).

- Run `npm run dev` to start the development server
- Run `npm run build` to build a production-ready node.js server
- Run `npm run preview` to run the production server

## Adding Pages

Pages map to the directory structure. You can add additional pages by creating files/directories under `src/routes` with `+page.marko` files.  Learn more in the [`@marko/run` docs](https://github.com/marko-js/run/#file-based-routing).

## Template

Setup to include 

- Jest, for testing
- Prettier, for formatting JS files
- marko-prettyprint, for formatting Marko files
- lint-staged and husky for formatting files pre-commit