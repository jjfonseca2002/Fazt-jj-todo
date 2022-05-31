import { connect } from "mongoose"; //Tipo N#1
import { BDMONGO_URI } from "./config";

//Conexion a la Base de Datos de Mongo
(async () => {
    try {
        console.log("Working on DB Connection");
        const db = await connect(BDMONGO_URI);
        console.log("BD conectada a:", db.connection.name);
    } catch (error) {
        console.error(error);
    }
})();

//const mongoose = require('mongoose'); //Tipo N#2
//import mongoose from "mongoose"; //Tipo N#3
//Tipo N#4
//import { MongoClient } from 'mongodb';
//var MongoClient = require('mongodb').MongoClient;
//let url = "mongodb://localhost:27017/mydb";
//La solucion definitiva la encontré en: 
//https://www.codegrepper.com/code-examples/whatever/MongooseServerSelectionError%3A+connect+ECONNREFUSED+127.0.0.1%3A27017

 /*//Tipo N#2
async function miCnn() {
    await mongoose.connect('mongodb://localhost:27017/test');
    console.log("BD conectada a: text");
  }
  miCnn().catch(err => console.log(err));  
*/

 /*//Tipo N#3
(async() => {
    try {
        console.log('Working');
        const db = await mongoose.connect('mongodb://localhost/crud-mongo');
        console.log("BD conectada a: ", db.connection.name);
    } catch (error) {
        console.error(error);
    }
})()
*/

/*//Tipo N#4
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});
*/