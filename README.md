# Pokedex project

A simple pokedex using

- React
- Redux
- Redux-Thunk
- Material-ui
- pokeapi-js-wrapper

- airbnb linting rules
- prettier
- code is linted on commit (husky)
- storybook with a11y check
- end to end tests with cypress
- async image loading
- 100% test coverage
- Offline support
- Lighthouse score of 96 100 for accessibility (96/100/93/90)
- Runs with node
- Responsive

Bootstrapped with create-react-app

## Available Scripts

In the project directory, you can run:

### `yarn`

Installs all the dependencies

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.<br>

The page will reload if you make edits.<br>
You will also see any lint errors in the console.<br>

### `yarn build`

Bundles the application for production

### `yarn test`

Launches the test runner in interactive watch mode.

### `yarn pretty`

Formats the code

### `yarn lint`

Launches the linter with airbnb style guide.

### `yarn lint:watch`

Launches the linter with airbnb style guide in interactive watch mode.

### `yarn storybook`

Launches the storybook

### `yarn build-storybook`

Build static storybook site

### `yarn cypress:open`

Open cypress end to end testing

### `yarn cypress:run`

Run end to end tests in headless mode

## Production build

This will run the production build using a node server
```shell
yarn build
cd server
node server
```

## TODO

- Use react-router instead of a dialog for details
- Use normalizr and humps to simplify reducers

## Known issues

https://github.com/facebook/create-react-app/issues/6888
