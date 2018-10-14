const fs = require('fs')

let name = process.argv[2]
let content = fs.readFileSync(name, { encoding: 'utf8' })

console.log(content.split('\n').length - 1)
