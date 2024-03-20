const express = require("express")
const path = require("path")
const notifier = require('node-notifier');
const router = express.Router()
//tabelas
const Diet = require("../models/Diet")
const Sequelize = require("sequelize")
const bcrypt = require("bcryptjs")
const userAuth = require("../middlewares/userAuth")
//const Detailsuser = require("../middlewares/Detailsuser")
//const session = require('express-session');
//const flash = require('connect-flash');
const { tree } = require("gulp");

router.get("/Index"), (req, res) => {+6
    var Username = req.flash("Username")
    Model.findAll({
        where: [Username = req.flash("Username")]
    });

}
router.get("/Dietas/Nova",userAuth, (req, res) => {
    var Username = req.session.OUSR.Username
    var Photo = req.session.OUSR.Photo
    var EMAIL = req.session.OUSR.EMAIL
    OUSR.findAll({
        where: {
            UserType:UserType = "A"
        }
    }).then(function(Usuarios){
        USR1.findAll().then(function(detalhes){
            

        OITM.findAll().then(function(LISTAITEM){
        res.render("Dieta-nova", { Username:Username, Photo: Photo, EMAIL:EMAIL,Usuarios:Usuarios,detalhes:detalhes,moment: moment,LISTAITEM:LISTAITEM})
  
        })
    })
        
    })
}) 
router.use(express.json());
//router.use('/api', Anyroute)
router.post("/Dietas/Nova/Adicionaritens", async (req, res) => {
   //floatingSelectItem - item
   //FloaingSelectMedida - Quantidade
   //floatingSelectunmed - unidade medida
   //FloaingSelectKcal -- kcal
   //FloaingSelectcarbo - carbo
   //FloaingSelectProteina - proteina
   //
   //FloaingSelectGord - Gordura
    var {floatingSelectItem
        ,FloaingSelectMedida
        ,floatingSelectunmed
        ,FloaingSelectKcal
        ,FloaingSelectcarbo
        ,FloaingSelectProteina
        ,FloaingSelectGord } = req.body
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
  

 module.exports = router