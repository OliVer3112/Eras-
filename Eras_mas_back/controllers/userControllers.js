const { where } = require("sequelize");
const User = require("../models/userModels");
const bcrypt = require("bcrypt");
const dotenv = require('dotenv');
dotenv.config({path: './.env'});
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
    const{password} = req.body;//desestructuro para acceder a password más rápido
    
    
    try{
        
        const salt = await bcrypt.genSalt(10);//numero de bytes en la encriptación
        const hashed_password = await bcrypt.hash(password, salt);

        req.body.password = hashed_password;//le damos a la password de la request el valor de la password hash
        console.log(req.body.password);


        const user = await User.create(req.body);//tenemos que esperar a que procese la solicitud no es algo inmediato
        user.password = undefined;//para que no aparezca en las tablas

        res.status(200).json({user})//objeto vacío
    
    }catch(err){//con el catch en caso de error no se cae el servidor

        
        res.status(500).json({message: err.message});//mensaje vacío
    
    };
};

// HAY QUE HACER BIEN EL LOGIN CON IFS

const login = async (req, res) => {//login está en las ultima parte de la clase 7, al primera mitad de la 8 el token
    try{
        const {email, password} = req.body;//desestructuro para acceder a password más

        const user = await User.findOne({where:{email}});//buscamos el usuario en la base de datos
        const validPassword = await bcrypt.compare(password, user.password);

        if (!user || !validPassword) {
            return res.status(400).json({error: "Credenciales inválidas"});
            
        }

        const token = jwt.sign({id: user.id}, process.env.DB_JWT, {expiresIn: process.env.DB_JWT_EXPIRATION});//creo mi token
        console.log(token);//HAY QUE BORRARLO

        user.password = undefined;//para que no aparezca en las tablas
        res.status(200).json({token, user})//objeto vacío
        
    
    }catch(err){
        console.log(err);//HAY QUE BORRARLO
        
        res.status(500).json({message: err.message});//mensaje vacío
    
    };


}


module.exports = {login, register};