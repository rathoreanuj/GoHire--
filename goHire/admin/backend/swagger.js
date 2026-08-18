const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerServers = (process.env.SWAGGER_SERVERS || '')
  .split(',')
  .map((url) => url.trim())
  .filter(Boolean)
  .map((url) => ({
    url,
    description: 'Configured Server',
  }));

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Admin API Documentation',
      version: '1.0.0',
      description: 'API documentation for the Admin backend of JobPortal-GoHire',
    },
    servers: swaggerServers,
    components: {
      securitySchemes: {
        cookieAuth: {
          type: 'apiKey',
          in: 'cookie',
          name: 'connect.sid',
          description: 'Session cookie set after successful /api/auth/login + /api/auth/verify-2fa flow.',
        },
      },
    },
    security: [
      {
        cookieAuth: [],
      },
    ],
  },
  apis: ['./swagger-docs/*.js'], // Path to the API docs
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
};