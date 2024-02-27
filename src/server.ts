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
    host: '0.0.0.0',
    port: process.env.PORT ? Number(process.env.PORT) : 3333
  })
  .then(() => {
    console.log('runner server HTTP 🍃')
  })
