const Sequelize = require("sequelize")
const connection = require("../database/database")
const sequelize = require("sequelize")

const USR2 = connection.define('USR2', {
USERID: {
    type: sequelize.INTEGER,    
},
Street:{
    type: Sequelize.STRING,
    allowNull: false
},
City: {
    type: Sequelize.STRING,
    allowNull: false
},
//pais
Coutry: {
    type: Sequelize.STRING,
    allowNull: false
},
//Altura
Zipcode: {
    type: Sequelize.STRING,
    allowNull: false

},
//porcentagem gordura
localization: {
    type: Sequelize.STRING,
    allowNull: false

}

})

//forçar a criação da tabela no banco de dados
USR2.sync({ force: false })

module.exports = USR2