const register = (req, res) => {

    try{

        res.status(200).json({})//objeto vacío
    
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