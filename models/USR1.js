const Sequelize = require("sequelize")
const connection = require("../database/database")
const sequelize = require("sequelize")

const USR1 = connection.define('USR1', {
USERID: {
    type: sequelize.INTEGER,    
},
Phone1: {
    type: Sequelize.STRING,
    allowNull: false
},
AGE: {
    type: Sequelize.STRING,
    allowNull: false
},
//peso
Weight: {
    type: Sequelize.STRING,
    allowNull: false
},
//Altura
Height: {
    type: Sequelize.STRING,
    allowNull: false

},
//porcentagem gordura
Fatporcent: {
    type: Sequelize.STRING,
    allowNull: false

},
//Taxa metabolica
Taxmetabolic: {
    type: Sequelize.STRING,
    allowNull: false

},
TypeWorkout1: {
    type: Sequelize.STRING,
    allowNull: false

},
TypeWorkout2: {
    type: Sequelize.STRING,
    allowNull: false

}

})

//forçar a criação da tabela no banco de dados
USR1.sync({ force: false })

module.exports = USR1