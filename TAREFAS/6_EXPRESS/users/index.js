const express = require('express')
const router = express.Router()
const path = require('path')

const basePath = path.join(__dirname, '../templates')

router.get('/add', (req, res) => {
    res.sendFile(`${basePath}/cadastro.html`)
})

router.post('/save', (req,res) => {
    console.log(req.body)

    const name = req.body.name
    const age = req.body.age

    console.log(`O nome do usuário é ${name} e sua idade é ${age} anos.`)

    res.sendFile(`${basePath}/cadastro.html`)
})

router.get('/:id', (req,res) => {
    const id = req.params.id

    // leitura da tabela usuarios no bd
    console.log(`Estamos buscando pelo usuario ${id}`)
    res.sendFile(`${basePath}/users.html`)
})

module.exports = router