;
("use strict");
// configuración del servidor con express y cors para las peticiones de origenes desconocidos
const http = require("http"),
  express = require("express"),
  cors = require('cors'),
  file_finder = require("./main/file_finder/infrastructure/routes/fileFiner.route"),
  file = require("./main/files/infrastructure/routes/files.route");

  require('dotenv').config();
  
const app = express()
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use("/", file_finder, file);
const server = http.createServer(app);
const port = process.env.PORT||4000;
server.listen(port);
module.exports = app
