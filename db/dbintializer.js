const mongoose = require('mongoose')
const config = require('../config.json')
const dbName = config.dbName || 'db_user_01'; //
const dbUrl = config.dbUrl || 'mongodb://localhost:27017/';
const mongoOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}
module.exports = () => {
  mongoose.connect(dbUrl + dbName, mongoOptions).catch((error) => console.error(error))
  
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error: "));
  db.once("open", function () {
    console.log("Connected successfully");
  });
}