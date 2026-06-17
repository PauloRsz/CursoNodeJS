const express = require('express')
const app = express()
const port = 3000  // variavel ambiente

const path = require('path')

const basePath = path.join(__dirname, 'templates')

const checkAuth = function(req, res, next) {

    req.authStatus = true

    if(req.authStatus) {
        console.log('está logado, pode continuar')
        next()
    } else {
        console.log('não está logado, faça login para continuar')
    }
}

app.use(checkAuth)

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})

app.listen(port, () => {
    console.log(`app rodando na porta ${port}`)
})