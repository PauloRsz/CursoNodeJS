const express = require('express')
const app = express()
const path = require('path')
const users = require('./users')
const port = 5000

const basePath = path.join(__dirname, 'templates')

app.use(express.json())
app.use(express.urlencoded({
    extended: true,
}))

app.use(express.static('public'))

app.use('/users', users)


app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})

app.listen(port, () => {
    console.log(`app rodando na porta ${port}`)
})
