const express = require("express")
const path = require("path")
const notifier = require('node-notifier');
const router = express.Router()
//tabelas
const OUSR = require("../models/OUSR")
const USR1 = require("../models/USR1")
const USR2 = require("../models/USR2")
const USR3 = require("../models/USR3")
const Sequelize = require("sequelize")
const bcrypt = require("bcryptjs")
const userAuth = require("../middlewares/userAuth")
const Detailsuser = require("../middlewares/Detailsuser")
const session = require('express-session');
const flash = require('connect-flash');
const { tree } = require("gulp");

router.get("/Alunos/Novo", (req, res) => {
    var Usernameerror = req.flash("Usernameerror")
    var EMAILError = req.flash("EMAILError")
    var PASSWORDError = req.flash("PASSWORDError")
    var createSuccess = req.flash("createSuccess")
    var EMAILRegistered = req.flash("EMAILRegistered")
    var PASSWORDError1 = req.flash("PASSWORDError1")
    //OUSR
    var Username = req.flash("Username")
    var Fristname = req.flash("Fristname")
    var EMAIL = req.flash("EMAIL")
    var DateBrithday = req.flash("DateBrithday")
    var Blocked = req.flash("Blocked")
    var PASSWORD = req.flash("PASSWORD")
    //USR1
    var AGE = req.flash("AGE")
    var Phone = req.flash("Phone")
    var Weight = req.flash("Weight")
    var Height = req.flash("Height")
    var Fatpercent = req.flash("Fatpercent")
    var Taxmetabolic = req.flash("Taxmetabolic")
    var TypeWorkout1 = req.flash("TypeWorkout1")
    var TypeWorkout2 = req.flash("TypeWorkout2")
    //USR2
    var USERID = req.flash("USERID")
    var Street = req.flash("Street")
    var City = req.flash("City")
    var Coutry = req.flash("Coutry")
    var Zipcode = req.flash("Zipcode")
    var localization = req.flash("localization")
    //USR3
    var Question1 = req.flash("Question1")
    var Question2 = req.flash("Question2")
    var Question3 = req.flash("Question3")
    var Question4 = req.flash("Question4")
    var Question5 = req.flash("Question5")
    var Question6 = req.flash("Question6")
    var Question7 = req.flash("Question7")
    var Question8 = req.flash("Question8")
    var Question9 = req.flash("Question9")
    var Question10 = req.flash("Question10")
    var Question11 = req.flash("Question11")
    var Question12 = req.flash("Question12")
    
    //condições
    EMAILError = (EMAILError == undefined || EMAILError.length == 0) ? undefined : EMAILError
    PASSWORDError = (PASSWORDError == undefined || PASSWORDError.length == 0) ? undefined : PASSWORDError
    Usernameerror = (Usernameerror == undefined || Usernameerror.length == 0) ? undefined : Usernameerror

    Username = (Username == undefined || Username == 0) ? "" : Username
    EMAIL = (EMAIL == undefined || EMAIL.length == 0) ? "" : EMAIL

    createSuccess = (createSuccess == undefined || createSuccess.length == 0) ? "" : createSuccess
    EMAILRegistered = (EMAILRegistered == undefined || EMAILRegistered.length == 0) ? "" : EMAILRegistered
    Termoserror = (Termoserror == undefined)? "": Termoserror
    Termoserror1 = (Termoserror1==undefined)?"":Termoserror1
    res.render("People", {
         EMAILError, Usernameerror, 
         PASSWORDError, Username: Username,
         EMAIL: EMAIL,PASSWORD:PASSWORD, 
         createSuccess,Fristname:Fristname, 
         EMAILRegistered,Termoserror,Termoserror1, 
         PASSWORDError1 })
})
route.get('/Alunos/Novo', userAuth, (req, res) => {
    var USERID = req.session.OUSR.USERID;
   
    var { Username, Fristname, EMAIL, PASSWORD } = req.body
    var salt = bcrypt.genSaltSync(10)
    var hash = bcrypt.hashSync(PASSWORD, salt)
    var today = new Date();
    var createSuccess = "Cadastrado com sucesso! Enviaremos um email com a validação do seu cadastro!"
    if (USERID == undefined) {
        OUSR.findOne({
            where: {
                USERID: undefined
            }
        }).then(user => {
            if (user == undefined) {
                var USERID = user.USERID

                var correct = (USERID, user.USERID)

                if (correct) {

                    OUSR.create({
                        USERNAME: Username + " " + Fristname,
                        EMAIL: EMAIL,
                        PASSWORD: hash,
                        ProfUser: "N",
                        CreateDate: today,
                        ProfileImage: "assets/img/team/72x72/avatar.webp",
                        UserType: "A",
                        DateBrithday: "",
                        Blocked: "Y"
                    }),
                        USR1.create({
                            Phone: user.Phone1,
                            AGE: user.AGE,
                            Weight: user.Weight,
                            Height: user.Height,
                            Fatpercent: user.Fatporcent,
                            Taxmetabolic: user.Taxmetabolic,
                            TypeWorkout1: user.TypeWorkout1,
                            TypeWorkout2: user.TypeWorkout2
                        }),
                        USR2.create({
                            Phone: user.Phone1,
                            AGE: user.AGE,
                            Weight: user.Weight,
                            Height: user.Height,
                            Fatpercent: user.Fatporcent,
                            Taxmetabolic: user.Taxmetabolic,
                            TypeWorkout1: user.TypeWorkout1,
                            TypeWorkout2: user.TypeWorkout2
                        }),
                        USR3.create({
                            Phone: user.Phone1,
                            AGE: user.AGE,
                            Weight: user.Weight,
                            Height: user.Height,
                            Fatpercent: user.Fatporcent,
                            Taxmetabolic: user.Taxmetabolic,
                            TypeWorkout1: user.TypeWorkout1,
                            TypeWorkout2: user.TypeWorkout2
                        })

                    res.redirect("/Home")
                }
                else {
                    var PASSWORDIncorrect = " senha incorreta"
                    req.flash("PASSWORDIncorrect", PASSWORDIncorrect)
                    res.redirect("/")

                }
            }
            else {
                var EMAILIncorrect = "Email não encontrado"
                req.flash("EMAILIncorrect", EMAILIncorrect)
                var EMAILIncorrect1 = "Seu acesso ainda esta bloqueado"
                req.flash("EMAILIncorrect1", EMAILIncorrect1)
                res.redirect("/")
            }
        })
    }
})
router.post("/Cadastro/create", async (req, res) => {
   
    var {Username,Fristname, EMAIL,PASSWORD,PASSWORD2,scales,scales1, } = req.body
    
    
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
                var createSuccess = "Cadastrado com sucesso! Enviaremos um email com a validação do seu cadastro!"
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

