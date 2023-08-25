const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const basename = path.basename(__filename)
const models = {}

const sequelizeOptions = {
    dialect: 'mysql',    
    timezone: '-03:00',
    logging: false,    
    host: 'localhost',
    database: 'automarket',    
    username: 'root',
    password: '',    
}
const sequelize = new Sequelize(sequelizeOptions)
fs
	.readdirSync(__dirname)
	.filter(file => {
		return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
	})
	.forEach(file => {
		const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes)
		models[model.name] = model
	})

Object.keys(models).forEach(modelName => {
	if (models[modelName].associate) {
		models[modelName].associate(models)
	}
})

models.sequelize = sequelize
models.Sequelize = Sequelize

module.exports = models
