const fs = require('fs')
const options = { encoding: 'utf8' }

let dir = process.argv[2]
let ext = process.argv[3]
let rx = new RegExp('\.' + ext + '$')

fs.readdir(dir, options, (err, data) => {
  if (err) console.log(err)
  data.filter(name => {
    return name.match(rx)
  }).map(name => {
    console.log(name)
  })
})
