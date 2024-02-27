import { fastify } from 'fastify'
import { creatList } from './routers/creatList'
import { creatUser } from './routers/creatUser'
import { getUser } from './routers/getusers'
import { getList } from './routers/getList'

const app = fastify()

app.register(creatList)
app.register(creatUser)
app.register(getUser)
app.register(getList)

app
  .listen({
    port: 3333
  })
  .then(() => {
    console.log('runner server HTTP 🍃')
  })
