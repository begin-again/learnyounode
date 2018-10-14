const fs = require('fs')
const path = require('path')

let name = process.argv[2]
let ext = process.argv[3]

fs.readdir(name, { encoding: 'utf8' }, (err, list) => {
  if (err) return console.log(err)
  let files = list.filter(file => {
    return path.extname(file) === `.${ext}`
  })
  console.log(files.join('\n'))
})
