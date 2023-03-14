import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const List = () => {
  const Creat = async () => {
    await prisma.terefa.create({
      data: {
        title: 'novo title'
      }
    })
    console.log('funciona')
  }

  Creat()
    .catch(e => {
      throw e
    })
    .finally(async () => {
      await prisma.$disconnect()
    })
  return (
    <div className='App'>
      <div>
        <h1>To-Do List</h1>
        <input type='text' placeholder='chores..' />
        <button onClick={Creat}>Add in List</button>
      </div>
    </div>
  )
}

export default List
