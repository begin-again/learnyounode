const filterDir = require('./t6.mod.js')

let name = process.argv[2]
let ext = process.argv[3]

filterDir(name, ext, (err, list) => {
  if (err) return console.log(err)
  console.log(list.join('\n'))
})
