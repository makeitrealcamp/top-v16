var fs = require('fs')
  fs.readFile(process.argv[2], (err, e)=> {
    if (err) return console.error(err)
   console.log(e.toString().split('\n').length-1)
})


  

