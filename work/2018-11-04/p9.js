const http = require('http')

function getUrl (url) {
  return new Promise((resolve, reject) => {
    http.get(url, res => {
      res.setEncoding('utf8')
      let result = ''
      res.on('data', chunk => { result += chunk })
      res.on('end', () => {
        return resolve(result)
      })
    }).on('error', err => {
      return reject(err)
    })
  })
};

let promises = []
process.argv.slice(2).map(url => {
  promises.push(getUrl(url))
})
Promise.all(promises)
  .then(results => {
    results.forEach(result => {
      console.log(result)
    })
  })
  .catch(err => {
    console.log(err)
  })
