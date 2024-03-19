const Sequelize = require("sequelize")
const connection = require("../database/database")
const sequelize = require("sequelize")

const USR3 = connection.define('USR3', {
USERID: {
    type: sequelize.INTEGER,    
},
//Pergunta 1 - queixa principal
Question1: {
    type: Sequelize.STRING,
    allowNull: false
},
//Pergunta 2 - passa muito tempo em pe
Question2: {
    type: Sequelize.BOOLEAN,
    allowNull: false
},
//resposta pergunta 2
result2: {
    type: Sequelize.STRING,
    allowNull: false
},
//Pergunta 3 - fuma
Question3: {
    type: Sequelize.BOOLEAN,
    allowNull: false

},
//resposta pergunta 3
result3: {
    type: Sequelize.STRING,
    allowNull: false

},
//Pergunta 4 - tem algum problema de saude
Question4: {
    type: Sequelize.BOOLEAN,
    allowNull: false

},
//resposta pergunta 4
result4: {
    type: Sequelize.STRING,
    allowNull: false

},
//Pergunta 5 - Consome bebida alcolica?
Question5: {
    type: Sequelize.BOOLEAN,
    allowNull: false

},
//Pergunta 6 - Problemas cardio vasculares 
Question6: {
    type: Sequelize.BOOLEAN,
    allowNull: false

},
//resposta pergunta 6
result4: {
    type: Sequelize.STRING,
    allowNull: false

},
//Pergunta 7 - Quantas horas por dia voce dorme - resposta 
Question7: {
    type: Sequelize.STRING,
    allowNull: false

},
//Pergunta 8 - Horario em que acorda 
Question8: {
    type: Sequelize.STRING,
    allowNull: false

},
//Pergunta 9 - Horario em que Almoça 
Question9: {
    type: Sequelize.STRING,
    allowNull: false

},
//Pergunta 10 - Horario em que Treina 
Question10: {
    type: Sequelize.STRING,
    allowNull: false

},
//Pergunta 11 - Horario em que Dorme 
Question11: {
    type: Sequelize.STRING,
    allowNull: false

},
//Pergunta 12 - Pratica alguma atividade fisica 
Question12: {
    type: Sequelize.BOOLEAN,
    allowNull: false

},
//Pergunta 13 - Qual frequencia 
result13: {
    type: Sequelize.STRING,
    allowNull: false

}

})
//forçar a criação da tabela no banco de dados
USR3.sync({ force: false })

module.exports = USR3