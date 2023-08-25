const Sequelize = require('sequelize')  
const User = require('./user')

const sequelizeOptions = {
    dialect: 'mysql',    
    timezone: '-03:00',
    logging: false,    
    host: 'localhost',
    database: 'automarket',    
    username: 'root',
    password: '',    
    models: [User]
}
 module.exports = new Sequelize(sequelizeOptions)