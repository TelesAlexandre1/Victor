const Sequelize = require("sequelize")
const connection = require("../database/database")
const sequelize = require("sequelize")

const OITM = connection.define('OITM', {
    //codigo do item
    ItemCode: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true                
    },
    //descrição do alimento
    ItemName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    //grupo do alimento
    ItemGroup: {
        type: Sequelize.STRING,
        allowNull: false
    },
     //Unidade Medida
     ItemQuantity: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    //Unidade Medida
    ItemMensur: {
       type: Sequelize.FLOAT,
       allowNull: false
   },
    //umidade
    ItemMiosture: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    //energia
    ItemPower: {
        type: Sequelize.FLOAT,
        allowNull: false    
    },
    //proteina
    ItemProtein: {
        type: Sequelize.FLOAT,
        allowNull: false   
    },
    //lipidios
    ItemLip: {
        type: Sequelize.FLOAT,
        allowNull: false   
    },
    //colesterol
    Itemfat: {
        type: Sequelize.FLOAT,
        allowNull: false 
    },
    //carboidrato
    ItemCarbs: {
        type: Sequelize.FLOAT,
        allowNull: true 
    },
    //fibra alimentar
    ItemFiber: {
        type: Sequelize.FLOAT,
        allowNull: true 
    },
    //fibra alimentar
    ItemFiber: {
        type: Sequelize.FLOAT,
        allowNull: true 
    },
    //cinzas
    ItemCinzas: {
        type: Sequelize.FLOAT,
        allowNull: true 
    },
    //calcio
    ItemCalcio: {
        type: Sequelize.FLOAT,
        allowNull: true 
    },
    //magnezio
    ItemMagnesium: {
        type: Sequelize.FLOAT,
        allowNull: true 
    }


})

//forçar a criação da tabela no banco de dados
OITM.sync({ force: false })

module.exports = OITM