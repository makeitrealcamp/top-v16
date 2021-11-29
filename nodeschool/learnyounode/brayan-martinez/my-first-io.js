const fs = require('fs')

let a=fs.readFileSync(process.argv[2])
let str=a.toString()
let val=str.split('\n') 
console.log(val.length-1)
// fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1 learnyounode-solution
