const { financialLifeSchema } = require('./utils/validations');
const { swaggerConfig } = require('./utils/constraints');
const { computeScore } = require('./utils/lib');

// Read .env file from root folder
require('dotenv').config();

// Constraints definitions
const { APP_ENV, APP_HOST, APP_PORT, LOGGING_LEVEL, FRONTEND_APP_HOST } =
  process.env;
const FALLBACK_APP_PORT = 3002;
const BACKEND_APP_HOST = `http://${APP_HOST}:${APP_PORT || FALLBACK_APP_PORT}`;

// Fastify initialization
const fastify = require('fastify')({
  logger: {
    level: LOGGING_LEVEL ? LOGGING_LEVEL : 'info',
    prettyPrint: APP_ENV === 'dev'
  }
});

// Fastify plugins register
fastify.register(require('fastify-cors'), {
  origin: [FRONTEND_APP_HOST, BACKEND_APP_HOST]
});

fastify.register(require('fastify-swagger'), swaggerConfig);

// API routes
fastify.post('/compute/score', financialLifeSchema, async (request) => {
  const { annualIncome, monthlyCosts } = request.body;
  const score = computeScore(annualIncome, monthlyCosts);
  return { score };
});

// API start up
const bootstrap = async () => {
  try {
    await fastify.listen(APP_PORT || FALLBACK_APP_PORT);
    fastify.swagger();
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
bootstrap();
