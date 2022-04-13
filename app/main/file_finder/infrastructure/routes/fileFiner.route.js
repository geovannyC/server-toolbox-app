'use strict'
const express = require('express')
const api = express.Router(),
control = require('../controller/file.controller')
api.get('/files/data', control.getFileByName)
api.get('/file-controler-app-test', control.test)

module.exports = api