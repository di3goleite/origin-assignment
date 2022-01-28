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

fastify.register(require('fastify-swagger'), {
  routePrefix: '/docs',
  swagger: {
    info: {
      title: 'Origin Financial',
      description: 'Financial wellness score calculation',
      version: '0.1.0'
    },
    externalDocs: {
      url: 'https://useorigin.notion.site/THA-Web-Interface-API-application-4819947101684706b984f04e9aef9294',
      description: 'Find more info here'
    },
    host: `localhost:${APP_PORT}`,
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json']
  },
  uiConfig: {
    docExpansion: 'full',
    deepLinking: false
  },
  uiHooks: {
    onRequest: function (request, reply, next) {
      next();
    },
    preHandler: function (request, reply, next) {
      next();
    }
  },
  staticCSP: true,
  transformStaticCSP: (header) => header,
  exposeRoute: true
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
    fastify.swagger();
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

// Server start up
bootstrap();
