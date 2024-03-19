const USR1 = require("../models/USR1")


function Detailsuser(req, res,next) {
    var USERID = req.session.OUSR.USER
    var informacoes = USR1.findOne({where: {
        USERID : USERID
    }}  ).then(test => {
        console.log(JSON.stringify(test,['Phone1']));
        informacoes = JSON.stringify(test,null);
      
        
        })
    if(informacoes != undefined){
        next();
    }
   
       
  
    }
    
    

module.exports = Detailsuser