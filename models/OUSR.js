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
    //Data de criação
    CreateDate: {
        type: Sequelize.DATE,
        allowNull: false

    },
    //Imagem perfil
    ProfileImage: {
        type: Sequelize.STRING,
        allowNull: true

    },
    //Usuario tipo
    UserType: {
        type: Sequelize.STRING,
        allowNull: true

    },
    //Data Aniversario
    DateBrithday: {
        type: Sequelize.STRING,
        allowNull: false

    },
    //Ativo
     Blocked: {
        type: Sequelize.STRING,
        allowNull: false

    },
    //Telefone
    Phone1: {
        type: Sequelize.STRING,
        allowNull: true
    },
    AGE: {
        type: Sequelize.STRING,
        allowNull: true
    },
    //peso
    Weight: {
        type: Sequelize.STRING,
        allowNull: true
    },
    //Altura
    Height: {
        type: Sequelize.STRING,
        allowNull: true
        
    
    },
    //porcentagem gordura
    Fatporcent: {
        type: Sequelize.STRING,
        allowNull: true
    
    },
    //Taxa metabolica
    Taxmetabolic: {
        type: Sequelize.STRING,
        allowNull: true
    
    },
    // Tipo treino
    TypeWorkout1: {
        type: Sequelize.STRING,
        allowNull: true
    
    },
    //Tipo treino2
    TypeWorkout2: {
        type: Sequelize.STRING,
        allowNull: true
    
    },
    //Profissao
    job:{
        type: Sequelize.STRING,
        allowNull: true
    },
    //rua
    Street:{
        type: Sequelize.STRING,
        allowNull: true
    },
    //Cidade
    City: {
        type: Sequelize.STRING,
        allowNull: true
    },
    //Cidade
    region: {
        type: Sequelize.STRING,
        allowNull: true
    },
    //pais
    Coutry: {
        type: Sequelize.STRING,
        allowNull: true
    },
    //CEP
    Zipcode: {
        type: Sequelize.STRING,
        allowNull: true
    
    },
    //Localização
    localization: {
        type: Sequelize.STRING,
        allowNull: true
    
    },
    //Pergunta 1 - queixa principal
    Question1: {
        type: Sequelize.STRING,
        allowNull: true
    },
    //Pergunta 2 - passa muito tempo em pe
    Question2: {
        type: Sequelize.STRING,
        allowNull: true
    },
    //
    result2: {
        type: Sequelize.STRING,
        allowNull: true
    },
    //Pergunta 3 - fuma
    Question3: {
        type: Sequelize.STRING,
        allowNull: true

    },
    //resposta pergunta 3
    result3: {
        type: Sequelize.STRING,
        allowNull: true

    },
    //Pergunta 4 - tem algum problema de saude
    Question4: {
        type: Sequelize.STRING,
        allowNull: true

    },
    //resposta pergunta 4
    result4: {
        type: Sequelize.STRING,
        allowNull: true

    },
    //Pergunta 5 - Consome bebida alcolica?
    Question5: {
        type: Sequelize.STRING,
        allowNull: true

    },
    //Pergunta 6 - Problemas cardio vasculares 
    Question6: {
        type: Sequelize.STRING,
        allowNull: true

    },
    //resposta pergunta 6
    result3: {
        type: Sequelize.STRING,
        allowNull: true

    },
    //Pergunta 7 - Quantas horas por dia voce dorme - resposta 
    Question7: {
        type: Sequelize.STRING,
        allowNull: true

    },
    //Pergunta 8 - Horario em que acorda 
    Question8: {
        type: Sequelize.STRING,
        allowNull: true

    },
    //Pergunta 9 - Horario em que Almoça 
    Question9: {
        type: Sequelize.STRING,
        allowNull: true

    },
    //Pergunta 10 - Horario em que Treina 
    Question10: {
        type: Sequelize.STRING,
        allowNull: true

    },
    //Pergunta 11 - Horario em que Dorme 
    Question11: {
        type: Sequelize.STRING,
        allowNull: true

    },
    //Pergunta 12 - Pratica alguma atividade fisica 
    Question12: {
        type: Sequelize.STRING,
        allowNull: true

    },
    //Pergunta 13 - Qual frequencia 
    result13: {
        type: Sequelize.STRING,
        allowNull: true

    }
    
})

//forçar a criação da tabela no banco de dados
OUSR.sync({ force: false })

module.exports = OUSR