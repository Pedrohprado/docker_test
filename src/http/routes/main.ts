import type { FastifyInstance } from 'fastify';
import { userRoutes } from './user.js';

export async function mainRoutes(app: FastifyInstance) {
  app.register(userRoutes, { prefix: '/user' });
}
