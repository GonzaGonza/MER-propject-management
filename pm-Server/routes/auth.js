const express = require ('express');
const router = express.Router();
const createError = require ("http-errors");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const User = require ("../models/user-model");

//HELPER FUNCTIONS
const {
  isLoggedIn,
  isNotLoggedIn,
  validationLogin
  //isAdmin
} = require("../helpers/middleware");


//POST '/auth/signup'
router.post
