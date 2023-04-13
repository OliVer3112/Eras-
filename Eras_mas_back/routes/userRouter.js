const express = require('express');
const { register, login } = require('../controllers/userControllers');
const dotenv = require('dotenv');
const { existUser } = require('../middlewares/userMiddleware');
dotenv.config({path: './.env'});

const router = express.Router();//para poder hacer las router

router.post('/register', existUser, register);//cargo la funcion de controlador de registro
router.post('/login', login);//cargo la funcion de controlador de login

module.exports = {userRouter : router};//para no llamar siempre a routert