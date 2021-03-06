# THA: Web Interface

Responsive web interface made with React. For this project, we have these deliverables:

* Application: made with React;
* Unit tests: made with React Testing Library;
* End-to-end test: made with Cypress;
* Live documentation: made with Storybook.

## Requirements

* This project needs, as base requirements, the latest LTS version of [NodeJS](https://nodejs.org/) and NPM;
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

## Available Scripts

In this app directory, you can run:

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

### `npm run lint`

Runs Eslint against all the files available on `src/` folder.

### `npm run test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

![Unity tests](https://i.imgur.com/XCpsH0E.png)

### `npm run cypress`

Launches Cypress end-to-end test runner. Before run this command, please make sure to have this requirements in place:

* The app running
* [Cypress system requirements](https://docs.cypress.io/guides/getting-started/installing-cypress#System-requirements)

![End-to-end tests](https://i.imgur.com/a52cZN2.png)

### `npm run storybook`

Launches Storybook app live documentation. Open [http://localhost:3001](http://localhost:3001) to view it in your browser.

![Storybook live documentation](https://i.imgur.com/43ebeR5.png)
