
const fs = require('fs')
const options = { encoding: 'utf8' }

module.exports = function (dir, ext, cb) {
  let rx = new RegExp('\.' + ext + '$')

  fs.readdir(dir, options, (err, data) => {
    if (err) return cb(err)
    let result = data.filter(name => {
      return name.match(rx)
    })
    return cb(null, result)
  })
}
