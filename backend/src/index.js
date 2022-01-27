// Read .env file in root folder
require('dotenv').config();

const { APP_ENV, APP_PORT } = process.env;

const fastify = require('fastify')({
  logger: {
    level: 'info',
    prettyPrint: APP_ENV === 'dev'
  }
});

fastify.get('/', async () => {
  return { hello: 'world' };
});

const bootstrap = async () => {
  try {
    await fastify.listen(APP_PORT);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

bootstrap();
