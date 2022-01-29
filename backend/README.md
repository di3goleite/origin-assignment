# THA: API Application

API application made with Fastify. For this project, we have these deliverables:

* Application: made with Fastify
* Unit tests: made with Jest
* Live documentation: made with Swagger

## Requirements

This project needs, as base requirements, the latest LTS version of [NodeJS](https://nodejs.org/) and NPM.

## Usage

### Install all dependencies

```
npm install
```

### Setup environment variables

```
cp .env.example .env
```

### Start this application

```
npm start
```

## Available Scripts

In this app directory, you can run:

### `npm start`

Runs the API in the chosen environment mode. This configuration is available on `.env` file. The API will be running on [http://localhost:3002](http://localhost:3002) address.

Launches Swagger app live documentation. Open [http://localhost:3002/docs](http://localhost:3002/docs) to view it in your browser.

![Swagger live documentation](https://i.imgur.com/bqZZSRK.png)

### `npm run watch`

Runs the application in watch mode using Nodemon. Any changes on json or js files will trigger the app reload. You may also see any lint errors in the console. This is useful on development environment.

### `npm run lint`

Runs Eslint against all the files available on `src/` folder.

### `npm run test`

Launches the test runner in the interactive watch mode using Jest.

![Unity tests](https://i.imgur.com/yslvVwA.png)
