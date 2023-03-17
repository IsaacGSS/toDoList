import { prisma } from './prisma'
export const getAllTodo: any = async () => {
  const tabela = await prisma.tarefa.findMany()

  console.log(tabela)
}
