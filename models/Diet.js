const Sequelize = require("sequelize")
const connection = require("../database/database")
const sequelize = require("sequelize")

const Diet = connection.define('Diet', {
    //key do documento
    DocEntry: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true                
    },
    
    //ID de usuario
    USERID: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    //Nome do usuario
    USERNAME: {
        type: Sequelize.STRING,
        allowNull: false
    },
      //Atualização 
      Daysbefore: {
        type: Sequelize.STRING,
        allowNull: false
    },
     //Tipo 
     TipoInfo: {
        type: Sequelize.STRING,
        allowNull: false
    },
      //Categoria 
      TipoInfo: {
        type: Sequelize.STRING,
        allowNull: false
    },
      //Tipo de dieta 
      DocType: {
        type: Sequelize.STRING,
        allowNull: false
    },
    //Codigo do Item
    ItemCode: {
        type: Sequelize.STRING,
        allowNull: false
    },
    // Descriçaõ do item
    ItemName: {
        type: Sequelize.STRING,
        allowNull: false    
    },
    //Quantidade
    Quantity: {
        type: Sequelize.FLOAT,
        allowNull: false   
    },
    //Unidade Medida
    ItemMensur: {
        type: Sequelize.STRING,
        allowNull: false   
    },
    //energia kcal
    ItemPower: {
        type: Sequelize.FLOAT,
        allowNull: false    
    },
    //proteina
    ItemProtein: {
        type: Sequelize.FLOAT,
        allowNull: false   
    },
     //carboidrato
     ItemCarbs: {
        type: Sequelize.FLOAT,
        allowNull: true 
    },
    //Gordura
    Itemfat: {
        type: Sequelize.FLOAT,
        allowNull: false 
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
    ,
    //Data Final
    Datebefore: {
        type: Sequelize.DATE,
        allowNull: true 
    }


})

//forçar a criação da tabela no banco de dados
Diet.sync({ force: false })

module.exports = Diet