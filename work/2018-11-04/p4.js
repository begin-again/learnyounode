const { readFile } = require('fs')

let file = process.argv[2]
readFile(file, (err, data) => {
  if (err) throw err
  let lines = data.toString().match(/\n/g).length
  console.log(lines)
})
