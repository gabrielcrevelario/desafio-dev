import { createConnection } from 'typeorm'
import fastify from 'fastify'
import fastifyCors from 'fastify-cors'
import fastifySwagger from 'fastify-swagger'
const server = fastify({ logger: true })

void server.register(fastifyCors,{
  origin: '*'
})

void server.register(fastifySwagger, {
  routePrefix: '/documentation',
  swagger: {
    info: {
      title: 'Test swagger',
      description: 'Testing the Fastify swagger API',
      version: '0.1.0'
    },
    externalDocs: {
      url: 'https://swagger.io',
      description: 'Find more info here'
    },
    host: 'localhost',
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json']
  },
  uiConfig: {
    docExpansion: 'full',
    deepLinking: false
  },
  uiHooks: {
    onRequest: function (request, reply, next) { next() },
    preHandler: function (request, reply, next) { next() }
  },
  staticCSP: true,
  transformStaticCSP: (header) => header,
  exposeRoute: true
})

server.get('/teste',{
  schema: {
    description: 'post some data',
    response: {
      200: {
        description: 'Successful response',
        type: 'object',
        properties: {
          type: 'string'
        }
      },
      default: {
        description: 'Default response',
        type: 'object',
        properties: {
          type: 'string'
        }
      }
    }
  }
}, async (request , reply): Promise<string> => {
  return 'teste fastify\n'
})

server.listen(3000, () => {
  createConnection().then(async connection => {

  }).catch(error => console.log(error))
})
