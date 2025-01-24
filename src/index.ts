import configeOpenAPI from './lib/confige-openapi';
import createApp from './lib/create-app';
import index from './routes/index';

const app = createApp();

configeOpenAPI(app);

const routes = [index];

routes.forEach((route) => app.route('/', route));

app.get('/err', (c) => {
  throw new Error("What's this");
});

app.get('/', (c) => {
  return c.json({ message: 'Hello from our API' });
});

export default app;
