const ext='.'+process.argv[3]
const route=process.argv[2]
const fs = require('fs')
const path = require('path');


fs.readdir(route,(err, list)=> {
   if(err)return console.log(err);
   list.map((e)=>{
      if(path.extname(e)===ext)console.log(e)
   })

})