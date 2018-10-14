let sum = process.argv.slice(2).reduce((acc, curr) => {
  return Number(curr) + acc
}, 0)
console.log(sum)
