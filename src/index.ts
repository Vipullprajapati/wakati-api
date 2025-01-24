import configeOpenAPI from './lib/confige-openapi';
import createApp from './lib/create-app';

const app = createApp();

configeOpenAPI(app);

app.get('/err', (c) => {
  throw new Error("What's this");
});

app.get('/', (c) => {
  return c.json({ message: 'Hello from our API' });
});

export default app;
