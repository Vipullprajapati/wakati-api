import { OpenAPIHono } from '@hono/zod-openapi';
// import { logger } from 'hono/logger';
import { notFound, onError } from 'stoker/middlewares';
import logger from './middleware/logger';

const app = new OpenAPIHono({
  strict: false,
});

// app.use(pinoLogger());
app.use(logger());
app.notFound(notFound);
app.onError(onError);

app.get('/err', (c) => {
  throw new Error("What's this");
});

app.get('/', (c) => {
  return c.json({ message: 'Hello from our API' });
});

export default app;
