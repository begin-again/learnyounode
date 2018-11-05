const http = require('http')
const fs = require('fs')

let port = Number(process.argv[2])
let file = process.argv[3]

const server = http.createServer(handler)
server.listen(port)

function handler (req, res) {
  res.writeHead(200, { 'content-type': 'text/plain' })
  let strm = fs.createReadStream(file, { encoding: 'utf8' })
  strm.pipe(res)
}
