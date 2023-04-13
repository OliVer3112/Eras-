const User = require("../models/userModels");

const existUser = (req, res, next) => {
    const {email} = req.body;//obtengo el email del usuario

    const user = User.findOne({where : {email}});//busco el usuario en la base de datos

    if (user) {
        return res.status(400).json({error: 'El usuario ya existe'});
    }

    return next();
}

module.exports = {existUser};