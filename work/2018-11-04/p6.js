const ff = require('./p6-module.js')

let dir = process.argv[2]
let ext = process.argv[3]

ff(dir, ext, (err, data) => {
  if (err) return console.log(err)
  data.map(file => {
    console.log(file)
  })
})
