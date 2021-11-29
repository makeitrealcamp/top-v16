let values = [];
let valuesInt = [];
for(let i = 0; i < process.argv.length; i++) {
   if (i > 1 ) values.push(process.argv[i]) 
}

values.forEach(item => {
    if (Number.isInteger(parseInt(item))) valuesInt.push(parseInt(item))
})

console.log(valuesInt.reduce((prev, curr) => prev + curr))
