const User = require("../models/userModels");
const bcrypt = require("bcrypt");

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
    
    }catch(err){

        
        res.status(500).json({message: err.message});//mensaje vacío
    
    };
};



const login = (req, res) => {
    try{

        res.status(200).json({})//objeto vacío
    
    }catch(err){

        
        res.status(500).json({message: err.message});//mensaje vacío
    
    };


}


module.exports = {login, register};