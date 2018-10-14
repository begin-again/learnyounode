
const fs = require('fs')
const path = require('path')

module.exports = filterDir

function filterDir (dirname, filterExtension, cb) {
  fs.readdir(dirname, { encoding: 'utf8' }, (err, list) => {
    if (err) return cb(err)
    let files = list.filter(file => {
      return path.extname(file) === `.${filterExtension}`
    })
    cb(null, files)
  })
}
