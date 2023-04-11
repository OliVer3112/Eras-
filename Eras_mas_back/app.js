const express = require('express');//importo las librerías de express
const { userRouter } = require('./routes/userRouter');
const dotenv = require('dotenv');
dotenv.config({path: './.env'});


const app = express();
app.use(express.json());//necesario para leer los json


app.use(userRouter);//cargo userRouter

//es un get (no lo voy a usar)
app.use('/user', (req, res) =>{//solicitud de get exitosa
    res.status(200).send('Hola mundo');
});//para llamar a las rutas de usuario (creacion y login)


module.exports = app;