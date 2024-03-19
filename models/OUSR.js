const Sequelize = require("sequelize")
const connection = require("../database/database")
const sequelize = require("sequelize")

const OUSR = connection.define('OUSR', {
    USERID: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    USERNAME: {
        type: Sequelize.STRING,
        allowNull: false
    },
    EMAIL: {
        type: Sequelize.STRING,
        allowNull: false
    },
    PASSWORD: {
        type: Sequelize.STRING,
        allowNull: false
    },
    ProfUser: {
        type: Sequelize.STRING,
        allowNull: false

    },
    CreateDate: {
        type: Sequelize.DATE,
        allowNull: false

    },
    ProfileImage: {
        type: Sequelize.STRING,
        allowNull: false

    },
    UserType: {
        type: Sequelize.STRING,
        allowNull: false

    },
    DateBrithday: {
        type: Sequelize.STRING,
        allowNull: false

    },
     Blocked: {
        type: Sequelize.STRING,
        allowNull: false

    }
})

//forçar a criação da tabela no banco de dados
OUSR.sync({ force: false })

module.exports = OUSR