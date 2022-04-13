"use strict";
const express = require("express");
const api = express.Router(),
  control = require("../controller/files.controller");
api.get("/files/list", control.getFiles);
api.get('/files-app-test', control.test)

module.exports = api;
