const swaggerJsDoc = require('swagger-jsdoc');
const path = require('path');

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
      title: 'Recruiter Server API Documentation',
      version: '1.0.0',
      description: 'API Documentation for the Recruiter Server of GoHire',
    },
    servers: swaggerServers,
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
        cookieAuth: {
          type: 'apiKey',
          in: 'cookie',
          name: 'token',
        }
      },
    },
    security: [
      {
        cookieAuth: [],
      },
      {
        bearerAuth: [],
      }
    ],
  },
  // We specify paths to all the doc files we create
  apis: [path.join(__dirname, '*.js')],
};

const swaggerSpec = swaggerJsDoc(swaggerOptions);

module.exports = swaggerSpec;
