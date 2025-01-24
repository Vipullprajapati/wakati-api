import { apiReference } from '@scalar/hono-api-reference';
import packageJson from '../../package.json';
import type { OpenAPIHono } from '@hono/zod-openapi';

export default function configeOpenAPI(app: OpenAPIHono) {
  app.doc('/doc', {
    openapi: '3.0.0',
    info: {
      title: 'My API',
      version: packageJson.version,
    },
  });

  app.get(
    '/reference',
    apiReference({
      spec: {
        url: '/doc',
      },
    })
  );
}
