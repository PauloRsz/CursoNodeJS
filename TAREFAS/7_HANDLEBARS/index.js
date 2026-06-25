const express = require('express')
const exphbs = require('express-handlebars')
const path = require('path')

const app = express()

const basePath = path.join(__dirname, 'views')

const hbs = exphbs.create({
    partialsDir: ['views/partials'],
})

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')
app.use(express.static('public'))


app.get('/dashboard.handlebars', (req, res) => {

    const items = ["item a", "item b", "item c"]

    res.render('dashboard', {items})
})

app.get('/post', (req, res) => {
    const post = {
        title: "aprendendo node.js",
        category: "JavaScript",
        body: "Este artigo vai te ajudar a aprender Node.js...",
        comments: 4,
    }

    res.render('blogspot', {post})
})

app.get('/blog', (req, res) => {
    const post = [{
        title: "Aprendendo Node.js",
        category: 'JavaScript',
        body: 'teste',
        comments: 4,
    },
    {
        title: "Aprendendo python",
        category: 'python',
        body: 'teste',
        comments: 4,
    },
    {
        title: "Aprendendo c#",
        category: 'c#',
        body: 'teste',
        comments: 4,
    }
    ]
    res.render('blog', {post})
})

app.get('/veiculo', (req, res) => {
    res.render('veiculo', {
        css: '<link rel="stylesheet" href="css/veiculo.css">'
    
    })
})

app.get('/', (req, res) => {
    const user = {
        name: "Matheus",
        surname: "Battisti",
        age: "18"
    }
    const palavra = "teste"
    const auth = true
    const approved = false

    res.render('home', {user: user, palavra, auth, approved})
})

app.listen(3000, () => {
    console.log('App rodando')
})