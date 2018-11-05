const net = require('net')
const strftime = require('strftime')

const port = Number(process.argv[2])

const server = net.createServer(handler)
server.listen(port)

function handler (sock) {
  sock.write(strftime('%Y-%m-%d %H:%M') + '\n')
  sock.end()
  sock.on('error', err => {
    console.log('error', err)
  })
}
