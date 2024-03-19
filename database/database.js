const Sequelize = require("sequelize")
require('dotenv').config();
const connection = new Sequelize('Portal', 'sa','08018751',{
    host: 'localhost',
    dialect: 'mssql',
    timezone: '-03:00'

    
});
//const connection = new Sequelize( mongodb+srv://DBhaasapconsulting:<password>@cluster0.ukpjxwj.mongodb.net/
module.exports = connection;


