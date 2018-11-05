const http = require('http')

let port = Number(process.argv[2])

const server = http.createServer()
server.listen(port)
server.on('request', handler)

function handler (req, res) {
  if (req.method === 'POST') {
    let body = []
    req.on('data', chunk => {
      body.push(chunk)
    })
    req.on('end', () => {
      body = Buffer.concat(body).toString()
      res.end(body.toUpperCase())
    })
  }
}
