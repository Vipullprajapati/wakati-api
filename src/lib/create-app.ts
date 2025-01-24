import { OpenAPIHono } from '@hono/zod-openapi';
// import { logger } from 'hono/logger';
import { notFound, onError } from 'stoker/middlewares';
import logger from '../middleware/logger';
// import { openapi } from 'stoker';


// create router function
export function createRouter() {
  const app = new OpenAPIHono({
    // par bhi chalta hai
    strict: false,
  });
  return app;
}

// create app function

export default function createApp() {
  const app = createRouter();

  // app.use(pinoLogger());
  app.use(logger());
  app.notFound(notFound);
  app.onError(onError);

  return app;
}
