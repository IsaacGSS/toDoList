import { FastifyInstance } from 'fastify'
import { prisma } from '../lib/prisma'
import z from 'zod'

export async function creatUser(app: FastifyInstance) {
  app.post('/users', async (request, reply) => {
    const creatUsers = z.object({
      name: z.string().min(3),
      email: z.string().email()
    })

    const { name, email } = creatUsers.parse(request.body)

    await prisma.user.create({
      data: {
        name,
        email
      }
    })

    return reply.status(201).send({ message: 'creat user sucesse!' })
  })
}
