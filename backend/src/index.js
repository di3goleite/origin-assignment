// Read .env file in root folder
require('dotenv').config();

const { APP_ENV, APP_PORT, LOGGING_LEVEL } = process.env;
const { financialLifeSchema } = require('./utils/validations');
const { computeScore } = require('./utils/lib');

const fastify = require('fastify')({
  logger: {
    level: LOGGING_LEVEL ? LOGGING_LEVEL : 'info',
    prettyPrint: APP_ENV === 'dev'
  }
});

// Routes
fastify.post('/compute/score', financialLifeSchema, async (request) => {
  const { annualIncome, monthlyCosts } = request.body;
  const score = computeScore(annualIncome, monthlyCosts);
  return { score };
});

const bootstrap = async () => {
  try {
    await fastify.listen(APP_PORT);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

// Server start up
bootstrap();
