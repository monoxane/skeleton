import express from 'express'
import path from 'path'
import { schema } from './schema'
import cors from 'cors'
import log from '../utils/log'
const { graphqlHTTP } = require('express-graphql')

const initExpress = () => {
  const app = express()
  const dev = process.env.NODE_ENV === 'development'

  app.use(cors())

  app.use('/gql', graphqlHTTP({
    schema: schema,
    graphiql: dev
  }))

  app.get('/dist/bundle.js', (req, res) => {
    res.sendFile(path.join(__dirname, '../../../../ui/dist/bundle.js'))
  })

  app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../../../ui/src/public/index.html'))
  })

  const port = process.env.NODE_ENV === 'development' ? 3001 : 3000

  app.listen(port, () => {
    log('info', 'Skeleton', `http://localhost:${port}`)
  })
}

export { initExpress }
