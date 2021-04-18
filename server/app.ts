require('dotenv').config()
import express from 'express'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import cors from 'cors'
import router from '../server/routes'

const app = express()

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

// routes
app.use('/', router)

// if no route found
app.use('*', function (req, res) {
  res.status(404).send({ error: 'invalid route' })
})

export default app
