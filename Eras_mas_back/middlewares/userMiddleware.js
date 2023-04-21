const User = require("../models/userModels");

const existUser = async (req, res, next) => {//para registro
    const {email} = req.body;//obtengo el email del usuario

    const user = await User.findOne({where : {email}});//busco el usuario en la base de datos
    console.log(user);
    if (user) {
        return res.status(400).json({error: 'El usuario ya existe'});
    }

    return next();
}

module.exports = {existUser};