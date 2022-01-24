const express = require('express');
const cookieParser = require('cookie-parser');
const routeshandler = require('./routeshandler');
const initializeDb = require('./db/dbintializer');
var cors = require('cors');


const app = express()
app.use(express.json({ limit: '1024mb' }));
app.use(express.urlencoded({ limit: '1024mb', extended: true }));
app.use(cookieParser());
app.use(cors());
initializeDb()
routeshandler(app)
app.set("port", 4000)


const server = app.listen(app.get("port"), onSuccess)
server.on("error", onError)
function onSuccess () {
  console.log(`http://localhost:${app.get("port")}`)
}
function onError (error) {
  const port = app.get("port")
  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EADDRINUSE":
      console.error(port + " is already in use")
      process.exit(1)
    default:
      throw error
  }
}