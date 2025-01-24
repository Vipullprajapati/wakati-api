import { OpenAPIHono } from '@hono/zod-openapi';
// import { logger } from 'hono/logger';
import { notFound, onError } from 'stoker/middlewares';
import logger from './middleware/logger';
// import { openapi } from 'stoker';


export default function createApp() {
  const app = new OpenAPIHono({
    strict: false,
  });
  
  // app.use(pinoLogger());
  app.use(logger());
  app.notFound(notFound);
  app.onError(onError);





  return app;
}