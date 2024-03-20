
/*const Sequelize = require("sequelize")
require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');
const connection = "mongodb+srv://SYSTEM:Ya2FpStvhYJVl2YG@cluster0.unimmnx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(connection, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});*/
/*async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);*/

const Sequelize = require("sequelize")
require('dotenv').config();
const connection = new Sequelize('Portal', 'sa','08018751',{
    host: 'localhost',
    dialect: 'mssql',
    timezone: '-03:00'

    
});
//const connection = new Sequelize( mongodb+srv://DBhaasapconsulting:<password>@cluster0.ukpjxwj.mongodb.net/
module.exports = connection;


