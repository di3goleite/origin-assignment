# THA: Web Interface

Web application made with React. For this project, we have these derivables:

* Application: made with react
* Unit tests: made with react testing library
* End-to-end test: made with cypress
* Live documentation: made with storybooks

## Requirements

* This project requires as base requirements the latest LTS version of [NodeJS](https://nodejs.org/) and NPM;
* To run the end-to-end tests is necessary to install [Cypress system requirements](https://docs.cypress.io/guides/getting-started/installing-cypress#System-requirements).

## Usage

### Install all dependencies

```
npm install
```

### Start this application

P.S: Before start this application, don't forget to run the [backend](/backend) service as well.

```
npm start
```

Before

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm cypress`

Launches Cypress end-to-end test runner. Before run this command, please keep in mind to execute the steps described on the requirements section of this file.

### `npm storybook`

Launches Storybook app live documentation. Open [http://localhost:3001](http://localhost:3001) to view it in your browser.


### `npm lint`

Run eslint against all the files available on `src/` folder.
