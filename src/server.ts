import routers from '@/routes'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import express, {
  type NextFunction,
  type Request,
  type Response,
} from 'express'
import morgan from 'morgan'
import type { ClientError } from './utils/errors'

dotenv.config()
const server = express()

server.use(cors())
server.use(express.urlencoded({ extended: true, limit: '50mb' }))
server.use(express.json({ limit: '50mb' }))
server.use(cookieParser())
server.use(morgan('dev'))
server.use(express.static('public'))
server.use((_req: Request, res: Response, next: NextFunction) => {
  res.header('Access-Control-Allow-Origin', '*') // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
  next()
})
/**
 * 
 */
server.use('/', routers)
/**
 * 
 */
// Error catching endware.
server.use(
  (err: ClientError, _req: Request, res: Response, _next: NextFunction) => {
    res.status(err.statusCode).send({
      status: err.statusCode,
      error: true,
      message: err.message,
    })
  }
)

export default server
