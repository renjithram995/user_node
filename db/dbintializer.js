const mongoose = require('mongoose')
const dbName = 'db_user_01'; //
const dbUrl = 'mongodb://localhost:27017/';
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