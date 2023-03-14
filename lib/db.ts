import { prisma } from './prisma'

export interface Todo {
  id: string
  title: string
}

export const getAllTodo = async () => {
  const getAllTodo = await prisma.terefa.findMany()

  return getAllTodo
}

export const Create = async title => {
  await prisma.terefa.create({
    data: {
      title: title
    }
  })
}
