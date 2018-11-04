const fs = require('fs');
const options = {encoding: 'utf8'}

let file = process.argv[2];
let data = fs.readFileSync(file, options)
let lines = data.match(/\n/g).length;
console.log(lines)
