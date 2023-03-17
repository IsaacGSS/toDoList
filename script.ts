import { prisma } from './lib/prisma'

async function main() {
  const user = await prisma.tarefa.create({
    data: {
      title: 'treinar codigo por 2h'
    }
  })
  console.log(user)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async e => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
