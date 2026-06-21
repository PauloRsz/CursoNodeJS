const express = require('express')
const router = express.Router()
const path = require('path')
const fs = require('fs')

const basePath = path.join(__dirname, '../templates')

    let name
    let user

router.get('/add', (req, res) => {
    res.sendFile(`${basePath}/cadastro.html`)
})

router.post('/save', (req,res) => {
    console.log(req.body)

    name = req.body.name
    user = req.body.user

    salvarUsuario(name,user)

    console.log(`O nome do usuário é ${name} e seu nick é ${user}.`)

    res.sendFile(`${basePath}/cadastro.html`)
    return(name)
})

/*router.get('/:id', (req,res) => {
    const id = ('data/db.json', users.id)

    // leitura da tabela usuarios no bd
    console.log(`Estamos buscando pelo usuario ${id}`)
    res.sendFile(`${basePath}/users.html`)
})*/
router.get('/:id', (req, res) => {
    const id = Number(req.params.id)

    const dados = fs.readFileSync('data/db.json', 'utf8')
    const banco = JSON.parse(dados)

    const usuario = banco.users.find(u => u.id === id)

    res.send(`
        <html>
            <body>
                <h1>${usuario.name}</h1>
                <p>Nick: ${usuario.user}</p>
            </body>
        </html>
    `)
})

// função para salvar usuário em um arquivo json
function salvarUsuario(name, user) {
    //ler o banco
    const dados = fs.readFileSync('data/db.json', 'utf8')

    //converter json para objeto
    const banco = JSON.parse(dados)

    //criar usuário
    const novoUsuario = {
        id: banco.users.length + 1,
        name: name,
        user: user
    }

    //inserir no array
    banco.users.push(novoUsuario)

    //salvar no arquivo
    fs.writeFileSync('data/db.json', JSON.stringify(banco, null, 2))
}

module.exports = router