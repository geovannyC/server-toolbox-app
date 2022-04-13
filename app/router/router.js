"use strict";
const express = require("express");
const api = express.Router(),
  fileFinderControll = require("../main/file_finder/infrastructure/controller/file.controller"),
  filesControll = require("../main/files/infrastructure/controller/files.controller")
api.get("/files/list", filesControll.getFiles);
api.get('/files/data', fileFinderControll.getFileByName)
api.get('/file-controler-app-test', fileFinderControll.test)
api.get('/files-app-test', filesControll.test)

module.exports = api;