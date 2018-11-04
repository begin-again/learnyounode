const fs = require('fs')
const options = { encoding: 'utf8' }

let file = process.argv[2]
fs.readFile(file, options, (err, data) => {
  if (err) throw err
  let lines = data.match(/\n/g).length
  console.log(lines)
})
