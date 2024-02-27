import { FastifyInstance } from 'fastify'
import { prisma } from '../lib/prisma'
import z from 'zod'

export async function getList(app: FastifyInstance) {
  app.get('/list/:id', async (request, reply) => {
    const idUser = z.object({
      id: z.string().cuid()
    })

    const { id } = idUser.parse(request.params)

    return await prisma.user.findMany({
      where: {
        id
      },
      include: {
        list: {}
      }
    })
  })
}
