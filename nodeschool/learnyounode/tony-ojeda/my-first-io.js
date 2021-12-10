const fs = require('fs')

'use strict'
async function getLengthFile(path) {
    const file = await fs.readFileSync(path, 'utf8')
    console.log(file.split('\n').length - 1)
}

getLengthFile(process.argv[2])
