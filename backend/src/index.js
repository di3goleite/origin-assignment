const fastify = require('fastify')({
  logger: {
    level: 'info',
    prettyPrint: process.env.APP_ENV === 'dev'
  }
});

fastify.get('/', async () => {
  return { hello: 'world' };
});

const start = async () => {
  try {
    await fastify.listen(3001);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
