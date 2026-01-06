import type { FastifyInstance } from 'fastify';
import { showUsers } from '../controllers/user.js';

export async function userRoutes(app: FastifyInstance) {
  app.get('/', showUsers);
}
