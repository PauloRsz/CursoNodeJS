const express = require('express')
const exphbs = require('express-handlebars')
const conn = require('./db/conn.js')

const User = require('./models/User.js')

const app = express()

app.use(
    express.urlencoded({
        extended: true
    })
)

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home')
})

conn.sync().then(() => {
    app.listen(3000)
    console.log("aplicação rodando")
}).catch(err => console.log(err))