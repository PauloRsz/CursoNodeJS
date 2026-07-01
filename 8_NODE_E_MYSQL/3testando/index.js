const express = require('express')
const exphbs = require('express-handlebars')
const mysql = require('mysql2')

const app = express()

app.use(
    express.urlencoded({
        extended: true
    })
)

const hbs = exphbs.create({
    partialsDir: ['views/partials'],
})

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home')
})

app.post('/books/insertbook', (req,res) +{

} )

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '172839',
    database: 'nodemysql'
})

conn.connect(function(err) {
    if (err) {
        console.error('Erro ao conectar ao MySQL:', err)
        return
    }

    console.log('Conectou ao MySQL')

    const server = app.listen(3000, () => {
        console.log('App rodando na porta 3000')
    })

    server.on('error', (e) => {
        if (e.code === 'EADDRINUSE') {
            console.error('Erro: porta 3000 já está em uso')
            process.exit(1)
        } else {
            throw e
        }
    })
})