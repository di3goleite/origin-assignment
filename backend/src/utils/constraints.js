const swaggerConfig = {
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
};

module.exports = {
  swaggerConfig
};
