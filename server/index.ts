import app from './app'
import http from 'http'

const port = normalizePort(process.env.PORT || '3000')
app.set('port', port)

const server = http.createServer(app)

server.listen(port)
server.on('error', onError)
server.on('listening', onListening)

function normalizePort (val) {
  const port = parseInt(val, 10)

  if (isNaN(port)) {
    return val
  }

  if (port >= 0) {
    return port
  }

  return false
}

function onError (error) {
  if (error.syscall !== 'listen') {
    throw error
  }

  const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port

  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges')
      process.exit(1)
      break
    case 'EADDRINUSE':
      console.error(bind + ' is already in use')
      process.exit(1)
    default:
      throw error
  }
}

function onListening () {
  const addr = server.address()
  console.log(`Server mode : ${process.env.NODE_ENV}`)
  console.log(`Server port : ${port}`)
  if (typeof addr === 'string') {
    console.log(`Listen      : ${addr}`)
  } else {
    console.log(`Listen      : ${addr.address}/${addr.port}`)
  }
}
