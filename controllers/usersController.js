const express = require("express")
const path = require("path")
const notifier = require('node-notifier');
const router = express.Router()
//tabelas
const OUSR = require("../models/OUSR")
const USR1 = require("../models/USR1")
const USR2 = require("../models/USR2")
const Sequelize = require("sequelize")
const bcrypt = require("bcryptjs")
const userAuth = require("../middlewares/userAuth")
const Detailsuser = require("../middlewares/Detailsuser")
const session = require('express-session');
const flash = require('connect-flash');
const { tree } = require("gulp");

router.get("/Index"), (req, res) => {
    var Username = req.flash("Username")
    Model.findAll({
        where: [Username = req.flash("Username")]
    });

}


router.get("/Cadastro", (req, res) => {
    var Usernameerror = req.flash("Usernameerror")
    var EMAILError = req.flash("EMAILError")
    var PASSWORDError = req.flash("PASSWORDError")
    var createSuccess = req.flash("createSuccess")
    var EMAILRegistered = req.flash("EMAILRegistered")
    var Termoserror = req.flash("Termoserror")
    var Username = req.flash("Username")
    var Fristname = req.flash("Fristname")
    var EMAIL = req.flash("EMAIL")
    var PASSWORD = req.flash("PASSWORD")
    var Termoserror1 = req.flash("Termoserror1")
    var PASSWORDError1 = req.flash("PASSWORDError1")
   
    EMAILError = (EMAILError == undefined || EMAILError.length == 0) ? undefined : EMAILError
    PASSWORDError = (PASSWORDError == undefined || PASSWORDError.length == 0) ? undefined : PASSWORDError
    Usernameerror = (Usernameerror == undefined || Usernameerror.length == 0) ? undefined : Usernameerror

    Username = (Username == undefined || Username == 0) ? "" : Username
    EMAIL = (EMAIL == undefined || EMAIL.length == 0) ? "" : EMAIL

    createSuccess = (createSuccess == undefined || createSuccess.length == 0) ? "" : createSuccess
    EMAILRegistered = (EMAILRegistered == undefined || EMAILRegistered.length == 0) ? "" : EMAILRegistered
    Termoserror = (Termoserror == undefined)? "": Termoserror
    Termoserror1 = (Termoserror1==undefined)?"":Termoserror1
    res.render("Register", { EMAILError, Usernameerror, PASSWORDError, Username: Username, EMAIL: EMAIL,PASSWORD:PASSWORD, createSuccess,Fristname:Fristname, EMAILRegistered,Termoserror,Termoserror1, PASSWORDError1 })
})
 
router.use(express.json());
//router.use('/api', Anyroute)
router.post("/Cadastro/create", async (req, res) => {
   
    var {Username,Fristname, EMAIL,PASSWORD,PASSWORD2,scales,scales1 } = req.body
    
    
    var Usernameerror
    var EMAILError
    var PASSWORDError
    var Termoserror
    var Termoserror1
    var PASSWORDError1

    if (Username == "" || Username == undefined) {
        Usernameerror = "Nome e sobrenome não pode ser vazio"
    }
    if (EMAIL == "" || EMAIL == undefined) {
        EMAILError = "Email não pode ser vazio"
    }
    if (PASSWORD.length < 6) {
        PASSWORDError = "Senha muito curta"
    }
    if (PASSWORD == "" || PASSWORD == undefined) {
        PASSWORDError = "Senha não pode ser vazia"
    }
    if (PASSWORD != PASSWORD2) {
        PASSWORDError1 = " Senhas não coincidem" 
    }
    if (scales != 'on')
    {
        Termoserror = " Aceite nossas Politicas de privacidade"
    }
    if (scales1 != 'on')
    {
        Termoserror1 = " Aceite os  termos para continuar"
    }

//&& PASSWORD >= 5

    if (EMAIL != "" && Username != "" && PASSWORD != "" && PASSWORD == PASSWORD2 && EMAIL != undefined && scales1 == 'on'&& scales == 'on' ) {
        OUSR.findOne({
            where: {
                EMAIL: EMAIL
            }
        }).then(i => {
            if (i == undefined ) {
                
                var {Username,Fristname, EMAIL,PASSWORD} = req.body
                var salt = bcrypt.genSaltSync(10)
                var hash = bcrypt.hashSync(PASSWORD,salt)
                var today = new Date (); 
                    
                OUSR.create({
                    
                    USERNAME:Username+" "+Fristname,
                    EMAIL:EMAIL,
                    PASSWORD: hash,
                    ProfUser: "N",
                    CreateDate:today ,
                    ProfileImage:"assets/img/team/72x72/avatar.webp",
                    UserType: "A",
                    DateBrithday:"",   
                    Blocked: "Y"      
                }).then(() => {
                    
                  console.log("Cadastro Inserido")
                  
                  req.flash("Criado com sucesso", createSuccess)       
                 // req.getElementById("myCheck").console.click();
                                  
                  
                }).then(() => {
                    res.redirect("/Cadastro")
                })
               


    } else {
                EMAILRegistered = "Email já registrado"
                req.flash("EMAILRegistered", EMAILRegistered)
               
                req.flash("PASSEORDError", PASSWORDError)
                req.flash("PASSEORDError1", PASSWORDError1)
                req.flash("Termoserror1",Termoserror1)
                req.flash("Termoserror",Termoserror)
                req.flash("EMAIL", EMAIL)
                req.flash("Username", Username)
                req.flash("Fristname", Fristname)
                res.redirect("/Cadastro")
                   }
                  
                
        })
    } else {
        req.flash("EMAILError", EMAILError)
        req.flash("PASSEORDError", PASSWORDError)
        req.flash("PASSEORDError1", PASSWORDError1)
        req.flash("Termoserror1",Termoserror1)
        req.flash("Termoserror",Termoserror)
        req.flash("EMAIL", EMAIL)
        req.flash("Username", Username)
        req.flash("Fristname", Fristname)

        res.redirect("/Cadastro")
    }
   
})


router.get("/", (req, res) => {
    var EMAILError = req.flash("EMAILError")
    var PASSWORDError = req.flash("PASSWORDError")
    var EMAIL = req.flash("EMAIL")

    var PASSWORDIncorrect = req.flash("PASSWORDIncorrect")
    var EMAILIncorrect = req.flash("EMAILIncorrect")
    var EMAILIncorrect1 = req.flash("EMAILIncorrect1")
    EMAILError = (EMAILError == undefined || EMAILError.length == 0) ? undefined : EMAILError
    PASSWORDError = (PASSWORDError == undefined || PASSWORDError.length == 0) ? undefined : PASSWORDError

    EMAIL = (EMAIL == undefined || EMAIL.length == 0) ? "" : EMAIL

    PASSWORDIncorrect = (PASSWORDIncorrect == undefined || PASSWORDIncorrect.length == 0) ? "" : PASSWORDIncorrect
    EMAILIncorrect = (EMAILIncorrect == undefined || EMAILIncorrect.length == 0) ? "" : EMAILIncorrect
    EMAILIncorrect1 = (EMAILIncorrect1 == undefined || EMAILIncorrect1.length == 0) ? "" : EMAILIncorrect1


    res.render("index", { EMAILError, PASSWORDError, EMAIL: EMAIL, PASSWORDIncorrect, EMAILIncorrect,EMAILIncorrect1 })
})

router.post("/auth", (req, res) => {
    const { EMAIL, PASSWORD } = req.body

    var EMAILError
    var PASSWORDError

    if (EMAIL == "" || EMAIL == undefined) {
        EMAILError = "Email não pode ser vazio"
    } 
    

    if (PASSWORD == "" || PASSWORD == undefined) {
        PASSWORDError = "Senha não pode ser vazia"
    }

    req.flash("EMAIL", EMAIL)

    if (EMAIL != "" && PASSWORD != "" ) {
        
        //procurar por um usuário com uma condição
        OUSR.findOne({
            where: {
                EMAIL,Blocked: "N"
            }
        }).then(user => {
             if (user != undefined) {

                //bcrypt vai comparar a senha digita e a senha no banco de dados
                //caso retonar um valor ela existe, caso n, ela n existe
                var correct = bcrypt.compareSync(PASSWORD, user.PASSWORD)
                
               if (correct) {

                    req.session.OUSR = {
                            Username: user.USERNAME,
                            EMAIL: user.EMAIL,
                            Photo: user.ProfileImage,
                            USER: user.USERID
                        }
                    
                        //testar
                        //res.json(req.session.user)

                        
                    //res.redirect("/Home")

                    
                
                USR1.findOne({
                    where: {
                        USERID : user.USERID
                    }
                }).then(user => { 
                    if (user != undefined) {
                     var USERID = user.USERID
                       
                        var correct = (USERID, user.USERID)
                       //sair daqui

                        if (correct) {
        
                            req.session.USR1 = {
                                    USERID:user.USERID,
                                    Phone: user.Phone1,
                                    AGE: user.AGE,
                                    Weight:user.Weight,
                                    Height:user.Height,
                                    Fatpercent: user.Fatporcent,
                                    Taxmetabolic:user.Taxmetabolic,
                                    TypeWorkout1:user.TypeWorkout1,
                                    TypeWorkout2:user.TypeWorkout2
                                }   
                            }
                            res.redirect("/Home")}
                            else {
                                res.redirect("/Home")
                            }
                }) }
                else {
                    
                    var PASSWORDIncorrect = " senha incorreta"
                    req.flash("PASSWORDIncorrect", PASSWORDIncorrect)
                    res.redirect("/")

                }
            } else {
                var EMAILIncorrect = "Email não encontrado"
                req.flash("EMAILIncorrect", EMAILIncorrect)
                var EMAILIncorrect1 = "Seu acesso ainda esta bloqueado"
                req.flash("EMAILIncorrect1", EMAILIncorrect1)
                res.redirect("/")
            }
        })
    } else {
       
        req.flash("EMAILError", EMAILError)
        req.flash("PASSWORDError", PASSWORDError)

        res.redirect("/")
    }
})











router.get("/Home", userAuth, (req, res) => {
    var USERID = req.session.OUSR.USERID
    var Username = req.session.OUSR.Username
    var Photo = req.session.OUSR.Photo
    var EMAIL = req.session.OUSR.EMAIL
    
    res.render("Home", { Username:Username, Photo: Photo, EMAIL:EMAIL})
    
       
})
/*
var USERID = 1
var info = USR1.findOne({where: {
    USERID : USERID
}}  ).then(test => {
    console.log(JSON.stringify(test,['Phone1']));
    info = JSON.stringify(test,null);
    })
*/

router.get("/Perfil", userAuth,Detailsuser,  (req, res) => {

    var informacoes = req.session.USR1
    var Detail = informacoes
    var USERID = req.session.OUSR.USERID
    var Username = req.session.OUSR.Username
    var Photo = req.session.OUSR.Photo
    var EMAIL = req.session.OUSR.EMAIL
    var USERID = req.session.OUSR.USER
   
    if(Detail == undefined){
        Phone = ""
        AGE = ""
        Weight = ""
        Height = ""
        Fatpercent = ""
        Taxmetabolic = ""
        TypeWorkout1 = ""
        TypeWorkout2 = ""
    }else{
        if (Detail.USERID == USERID ){
            Phone = Detail.Phone
            AGE = Detail.AGE
            Weight = Detail.Weight
            Height = Detail.Height
            Fatpercent = Detail.Fatporcent
            Taxmetabolic = Detail.Taxmetabolic
            TypeWorkout1 = Detail.TypeWorkout1
            TypeWorkout2 = Detail.TypeWorkout2
        }
        else{
            Phone = ""
            AGE = ""
            Weight = ""
            Height = ""
            Fatpercent = ""
            Taxmetabolic = ""
            TypeWorkout1 = ""
            TypeWorkout2 = ""
            }
    }
    
  
   
   

    res.render("Profile", { Username:Username, Photo: Photo,EMAIL:EMAIL,USERID:USERID,Phone:Phone,AGE:AGE, Weight:Weight, Height:Height
        ,Fatpercent:Fatpercent,Taxmetabolic:Taxmetabolic,TypeWorkout1:TypeWorkout1,TypeWorkout2:TypeWorkout2})
       
  })  




router.post("/Perfil/Atualiza",(req, res) => {
    
    
     var USERID = req.body.USERID

     if (USERID != undefined) {
     USR1.findOne({
         where: {
            USERID : USERID
            
 
         }
     }).then(i => {
              
             var {USERID,Phone,AGE,Wheight,Height,Fatpercent,Taxmetabolic,TypeWorkout1,TypeWorkout2,Street,Zipcode,} = req.body
             //var USERID = req.session.OUSR.USERID
             var UpdateSucess = "Atualização realizada com sucesso."
                 USR1.create({
                     USERID: USERID,
                     Phone1: Phone,
                     AGE: AGE,
                     //peso
                     Weight: Wheight,
                     //Altura
                     Height:Height,
                     //porcentagem gordura
                     Fatporcent:Fatpercent ,
                     //Taxa metabolica
                     Taxmetabolic:Taxmetabolic ,
                     TypeWorkout1: TypeWorkout1 ,
                     TypeWorkout2:TypeWorkout2
                     
                     
                
                    
                }).then(() => {
                     
                   console.log("Cadastro Inserido")
                   
                   req.flash("Criado com sucesso", UpdateSucess)       
                  // req.getElementById("myCheck").console.click();
                                   
                   
                 }).then(() => {
                     res.redirect("/Perfil")
                 })
             })
          
         }
 
 })



router.get("/logout", (req, res) => {
    req.session.user = undefined
    res.redirect("/")
})

module.exports = router