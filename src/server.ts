import fastify from 'fastify';
import { mainRoutes } from './http/routes/main.js';

const app = fastify();

app.register(mainRoutes, { prefix: '/api' });

app.get('/teste', () => {
  return { test: 'test' };
});

app.listen({ host: '0.0.0.0', port: 3333 }).then(() => {
  console.log(`Server running!`, '0.0.0.0', 3333);
});
