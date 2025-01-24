```
npm install
npm run dev
```

```
npm run deploy
```

1- install bun
2- install hono
3- install dotenv

4 - pnpm dlx @antfu/eslint-config@latest

5 - bun install

6- bun lint:fix

7- bun lint


### Zod OpenAPI Hono

npm i @hono/zod-openapi


8- stoker 
bun add stoker {installation}


9- bun add hono
```bun add hono-pino```

10-bun add @scalar/hono-api-reference

```import { apiReference } from '@scalar/hono-api-reference'

app.get(
  '/reference',
  apiReference({
    theme: 'purple',
    spec: {
      url: '/openapi.json',
    },
  }),
)
```
11- 
```import { createRoute, z } from '@hono/zod-openapi';
import { createRouter } from '@/lib/create-app';
import type { Context } from 'hono';

const router = createRouter().openapi(
  createRoute({
    method: 'get',
    path: 'status',
    responses: {
      200: {
        content: {
          'application/json': {
            schema: z.object({
              message: z.string(),
            }),
          },
        },
        description: 'Retrieve the user',
      },
    },
  }),
  (c: Context) => {
    return c.json({ message: 'Our API is working wow' }, 200);
  }
);

export default router;
```
12-
