import { FastifyInstance } from 'fastify'
import { prisma } from '../lib/prisma'
import z from 'zod'

export async function creatList(app: FastifyInstance) {
  app.patch('/list/:id', async (request, reply) => {
    const creatList = z.object({
      title: z.string(),
      description: z.string()
    })

    const idUser = z.object({
      id: z.string().cuid()
    })

    const { id } = idUser.parse(request.params)
    const { title, description } = creatList.parse(request.body)

    await prisma.user.update({
      where: {
        id
      },
      data: {
        list: {
          create: {
            title,
            description
          }
        }
      }
    })

    return reply.status(201).send({ message: 'creat user sucesse!' })
  })
}
