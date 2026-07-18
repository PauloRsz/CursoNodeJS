const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('nodemvc', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
})

try {
    sequelize.authenticate()
    console.log('Conectamos ao bando de dados!')
} catch(error) {
    console.log('Não foi possível conectar:', error)
}

exports.default = sequelize