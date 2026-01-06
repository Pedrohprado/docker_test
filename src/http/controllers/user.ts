import type { FastifyReply, FastifyRequest } from 'fastify';
import { prisma } from '../../lib/prisma.js';

export async function showUsers(req: FastifyRequest, reply: FastifyReply) {
  try {
    const users = await prisma.user.findMany({});
    console.log(users);
    reply.send(users);
    reply.send();
  } catch (error) {
    reply.status(500).send({
      message: 'erro ao encontrar usuários.',
    });
  }
}
