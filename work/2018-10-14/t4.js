const fs = require('fs')

let name = process.argv[2]
fs.readFile(name, { encoding: 'utf8' }, (err, content) => {
  if (err) return console.log(err)
  console.log(content.split('\n').length - 1)
})
