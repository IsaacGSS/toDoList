import { FastifyInstance } from 'fastify'
import { prisma } from '../lib/prisma'

export async function getUser(app: FastifyInstance) {
  app.get('/users', async () => {
    return await prisma.user.findMany()
  })
}
