import fastify from 'fastify';

const app = fastify();

app.get('/teste', () => {
  return { test: 'test' };
});

app.listen({ host: '0.0.0.0', port: 3333 }).then(() => {
  console.log(`Server running!`, '0.0.0.0', 3333);
});
