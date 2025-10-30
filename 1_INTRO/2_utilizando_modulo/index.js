const fs = require('fs') // file system

fs.readFile('arquivo.txt2', 'utf8', (err,data) =>{

    if (err) {
        console.log(err)
    }

    console.log(data)
})