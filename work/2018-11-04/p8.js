const http = require('http')

let url = process.argv[2]

http.get(url, res => {
  res.setEncoding('utf8')
  let result = ''
  res.on('data', chunk => { result += chunk })
  res.on('end', () => {
    console.log(result.length)
    console.log(result)
  })
}).on('error', err => {
  console.log(err)
})
