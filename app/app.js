;
("use strict");
// configuración del servidor con express y cors para las peticiones de origenes desconocidos
const http = require("http"),
  express = require("express"),
  cors = require('cors'),
  path = require("./router/router")
  require('dotenv').config();
  
const app = express()
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use("/", path);
const server = http.createServer(app);
const port = process.env.PORT||4000;
server.listen(port);
module.exports = app
