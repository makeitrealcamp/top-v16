const mymodule = require('./mymodule')
const dir = process.argv[2]
const filterStr = process.argv[3]

mymodule(dir, filterStr, function (err, list) {
  if (err) {
    return console.error('Hubo un error :', err)
  }

  list.forEach( (file) =>{
    console.log(file)
  })


})
