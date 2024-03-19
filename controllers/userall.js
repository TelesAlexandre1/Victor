const express = require("express")
const path = require("path")
const notifier = require('node-notifier');
const router = express.Router()
//tabelas
const OUSR = require("../models/OUSR")
const USR1 = require("../models/USR1")
const USR2 = require("../models/USR2")
const USR3 = require("../models/USR3")
const Sequelize = require("sequelize")
const bcrypt = require("bcryptjs")
const userAuth = require("../middlewares/userAuth")
const Detailsuser = require("../middlewares/Detailsuser")
const session = require('express-session');
const flash = require('connect-flash');
const { tree } = require("gulp");

