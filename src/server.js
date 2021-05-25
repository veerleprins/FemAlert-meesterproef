// Externals
import sirv from 'sirv'
import express from 'express'
import compression from 'compression'
import * as sapper from '@sapper/server'
import { json } from 'body-parser'

// Internals
const { PORT, NODE_ENV } = process.env
const dev = NODE_ENV === 'development'

// Middleware
express()
  .use(
    json(),
    compression({ threshold: 0 }),
    sirv('static', { dev }),
    sapper.middleware()
  )
  .listen(PORT, (err) => {
    if (err) console.log('error', err)
  })
