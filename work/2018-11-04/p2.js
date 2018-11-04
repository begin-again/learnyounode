let sum = process.argv.slice(2).reduce( (cv, v) =>{
    return cv += Number(v)
},0)

console.log(sum)