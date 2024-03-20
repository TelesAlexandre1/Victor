const express = require("express")
const path = require("path")

const app = express()
const connection = require("./database/database")
const session = require("express-session")
    //expres-flash
const flash = require("express-flash")
const bcrypt = require("bcryptjs")
const cookieParser = require("cookie-parser")
    //controllers
const sequelize = require("sequelize")
    //const adminController = require("./controllers/adminController")
    //arquivos staticos (img,css,etc)
app.use(express.static('public'))
app.set('view engine', 'ejs');
const moment = require("moment")
const { hostname } = require("os")
    // criação das tabelas
const OITM = require("./models/OITM")
const OINV = require("./models/Diet")
const OUSR = require("./models/OUSR")
const USR1 = require("./models/USR1")

//pegar dados do formulário
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//app.use('/api', Anyroute);

const usersController = require("./controllers/usersController")
const Dietcontrol = require("./controllers/Dietcontrol")

const userAuth = require("./middlewares/userAuth")
const Detailsuser = require("./middlewares/Detailsuser")
const { Sequelize } = require("sequelize")

app.use(cookieParser("cfmsdanioudfkshniksd"))
    //session

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 40000000 }
}))

//express-flash
app.use(flash())

//banco de dados
connection.authenticate().then(() => {
    console.log("Conexão feita com sucesso")
}).catch((error) => {
    console.log(error)
})


//controllers
app.use("/", usersController)
app.use("/Dieta/Nova", Dietcontrol)


app.get("/",userAuth, (_req, res) => {
    res.render("Index")
})

app.get("/Alunos",userAuth, (req, res) => {
    var Username = req.session.OUSR.Username
    var Photo = req.session.OUSR.Photo
    var EMAIL = req.session.OUSR.EMAIL
   
    
    OUSR.findAll({
        where: {
            UserType:UserType = "A"
        }
    }).then(function(Usuarios){
        USR1.findAll().then(function(detalhes){
           // CreateDate = momnet(Usuarios.CreateDate).format('DD/MM/YYYY')
            res.render("Alunos", { Username:Username, Photo: Photo, EMAIL:EMAIL,Usuarios:Usuarios,detalhes:detalhes,moment: moment})
        })
        
    })
})
//Por convenção, o POST é utilizado para a atualização de um dado já existente, enquanto o PUT é utilizado para inserção de um novo dado.
//Nesse cenário, no POST é necessário informar o ID do dado que será alterado, enquanto no PUT esse id não é enviado pois ainda não existe no sistema.
app.post("/Alunos",userAuth,(req, res) => {

    var Username = req.session.OUSR.Username
    var Photo = req.session.OUSR.Photo
    var EMAIL = req.session.OUSR.EMAIL
    var block = req.body.block
    var ativation = req.body.Userselect

               OUSR.findAll({
                where: {
                    UserType:UserType = "A"
                }
            }).then(function(Usuarios) {
              
              if(block == "Y"){
                    OUSR.update({Blocked:"N"},{where:{ USERID: ativation}})
               
                   }
              
               //   })
               else 
               {
                   OUSR.update({Blocked:"Y"},{where:{ USERID: ativation}})
   
               }
             
            USR1.findAll().then(function(detalhes){
                
                // CreateDate = momnet(Usuarios.CreateDate).format('DD/MM/YYYY')
                 res.render("Alunos", { Username:Username, Photo: Photo, EMAIL:EMAIL,Usuarios:Usuarios,detalhes:detalhes,moment: moment})
            })
        })          
})
 
     

app.get("/Alunos/Novo",userAuth, (req, res) => {
    var Username = req.session.OUSR.Username
    var Photo = req.session.OUSR.Photo
    var EMAIL = req.session.OUSR.EMAIL     
    var createSuccess = "Cadastrado com sucesso! Usuario adicionado ao portal com sucesso!"
    res.render("People", { Username:Username, Photo: Photo, EMAIL:EMAIL,createSuccess:createSuccess})
})

app.post("/Alunos/Novo",userAuth, (req, res) => {
    var Username = req.session.OUSR.Username
    var Photo = req.session.OUSR.Photo
    var EMAIL = req.session.OUSR.EMAIL 
   //inforações Novo Aluno OUSR
    var Nome = req.body.floatingInputFirstname +' '+ req.body.floatingInputLastname
    var senha = req.body.floatingInputPassword
    var Tipoconta = req.body.floatingSelectOwner
    var idade = req.body.floatingInputAge
    var peso = req.body.floatingInputwheith
    var altura = req.body.floatingInputhight
    var Email = req.body.floatingInputAlternativeEmail
    var telefone = req.body.floatingInputPhone
    var gordura = req.body.floatingInputgordura
    var profissao = req.body.floatingInputLinkedin
    var nascimento = req.body.floatingInputdatanasc
    var TipoAluno = req.body.floatingSelectTipoaluno
    var Taxmetabolic = req.body.floatingInputTaxMetabolica
    var queixa = req.body.floatingInputQueixaprinc
    var cadativo = req.body.floatingSelectBlocked
    var workt1 = req.body.floatingInputwORKOUT1
    var workt2 = req.body.floatingInputwORKOUT2
    var rua = req.body.floatingInputStreet
    var cidade = req.body.floatingSelectCity
    var estado = req.body.floatingSelectState
    var pais = req.body.floatingSelectCountry
    var cepp= req.body.floatingInputZipcode
    //var localizacao = 
    var Quest02 = req.body.floatingSelecttempoempe
    var Quest03 = req.body.floatingSelectfumante
    var Quest04 = req.body.floatingSelectProblemasaude
    var result04 = req.body.floatingInputSaude
    var Quest05 = req.body.floatingSelectbebida
    var Quest06 = req.body.floatingSelectProblemacv
    var result06 = req.body.floatingInputproblemaCardVas
    var Quest07 = req.body.floatingSelecthorasdesono
    var Quest08 = req.body.floatingSelecthoraqueacordas
    var Quest09 = req.body.floatingSelecthoraquealmoca
    var Quest10 = req.body.floatingSelecthoradotreino
    var Quest11 = req.body.floatingSelecthoradedormir
    var Quest12 = req.body.floatingInputPraticaatfisica
    var Quest13 = req.body.floatingSelectquantasvezesporsemana
    var Infadicionais = req.body.floatingProjectOverview
    var salt = bcrypt.genSaltSync(10)
    var hash = bcrypt.hashSync(senha,salt)
    var imagem = req.body.image
    var today = new Date ();
    var createSuccess = "Cadastrado com sucesso! Usuario adicionado ao portal com sucesso!"
    var Imagemdb = '../../assets/img/team/'+req.body.floatingInputFirstname+'/'+req.body.image

    if (Email != "" && Nome != "" && senha != ""  ) {
        OUSR.findOne({
            where: {
                EMAIL: Email
            }
        }).then(i => {
            if (i == undefined ) {
        OUSR.create({
        USERNAME: Nome
        ,EMAIL: Email
        ,PASSWORD:hash
        ,ProfUser:Tipoconta
        ,ProfileImage:Imagemdb 
        ,DateBrithday: nascimento
        ,CreateDate:today 
        ,UserType:TipoAluno
        ,Blocked:cadativo
        ,Phone1:telefone
        ,AGE:idade
        ,Weight:peso
        ,Height:altura
        ,Fatporcent:gordura
        ,Taxmetabolic:Taxmetabolic
        ,TypeWorkout1:workt1
        ,TypeWorkout2:workt2
        ,job:profissao
        ,Street:rua
        ,City:cidade
        ,region:estado
        ,Coutry:pais
        ,Zipcode:cepp
        //,localization:''
        ,Question1:queixa
        ,Question2:Quest02
        ,Question3:Quest03
        ,Question4: Quest04
        ,result4:result04
        ,Question5: Quest05
        ,Question6:Quest06
        ,result3: result06
        ,Question7:Quest07
        ,Question8:Quest08
        ,Question9:Quest09
        ,Question10:Quest10
        ,Question11:Quest11
        ,Question12:Quest12
        ,result13:Quest13
        ,result2: Infadicionais

    }).then(() => {     
        console.log("Cadastro Inserido")
        req.flash("Criado com sucesso", createSuccess)
       })  
                
            
    }
  

}
 ) }
    res.render("People", { Username:Username, Photo: Photo, EMAIL:EMAIL,createSuccess:createSuccess,})
})

app.get("/Alunos/Analise",userAuth, (req, res) => {
    var Username = req.session.OUSR.Username
    var Photo = req.session.OUSR.Photo
    var EMAIL = req.session.OUSR.EMAIL
    res.render("Alunos-Analise", { Username:Username, Photo: Photo, EMAIL:EMAIL})  
})

app.get("/Dietas",userAuth, (req, res) => {
    var Username = req.session.OUSR.Username
    var Photo = req.session.OUSR.Photo
    var EMAIL = req.session.OUSR.EMAIL
      
    OUSR.findAll({
        where: {
            UserType:UserType = "A"
        }
    }).then(function(Usuarios){
        USR1.findAll().then(function(detalhes){
            res.render("Dieta", { Username:Username, Photo: Photo, EMAIL:EMAIL,Usuarios:Usuarios,detalhes:detalhes,moment: moment})
            })
        })          
})
app.get("/Dietas/detalhes",userAuth, (req, res) => {
    var Username = req.session.OUSR.Username
    var Photo = req.session.OUSR.Photo
    var EMAIL = req.session.OUSR.EMAIL
    res.render("DietaDetalhes", { Username:Username, Photo: Photo, EMAIL:EMAIL}) 
       
})

app.get("/Dietas/Nova",userAuth, (req, res) => {
    var Username = req.session.OUSR.Username
    var Photo = req.session.OUSR.Photo
    var EMAIL = req.session.OUSR.EMAIL
    OUSR.findAll(
        {
            where: {
                UserType:UserType = "A"
            }
        }
    ).then(function(Usuarios){
        USR1.findAll( ).then(function(detalhes){
            

        OITM.findAll().then(function(LISTAITEM){
        res.render("Dieta-nova", { Username:Username, Photo: Photo, EMAIL:EMAIL,Usuarios:Usuarios,detalhes:detalhes,moment: moment,LISTAITEM:LISTAITEM})
  
        })
    })
        
    })
})
app.get("/Dietas/Analise",userAuth, (_req, res) => {
    res.render("Dieta-Analise")
})

app.get("/Projeto",userAuth, (req, res) => {
        var Username = req.session.OUSR.Username
        var Photo = req.session.OUSR.Photo
        var EMAIL = req.session.OUSR.EMAIL
        res.render("Project-management", { Username:Username, Photo: Photo, EMAIL:EMAIL})  
    })

app.get("/Calendario",userAuth, (_req, res) => {
        res.render("Calendar")
})
app.listen(80, () => {
    console.log("Serve iniciando")
    console.log("")
})

//const crypto = require('crypto'),
//      fs = require("fs"),
//      http = require("http");
//   https = require("https");


//var certificate =fs.readFileSync('../public/ssl/gdig2.crt',{encoding:'utf8'},function(err, data ) {
//  console.log( data );});
//var privateKey  = fs.readFileSync('../public/ssl/gdig2.crt.pem',{encoding:'utf8'},function(err, data ) {
//console.log( data );});


//var credentials = {
// key: privateKey,
// cert: certificate,
////  rejectUnauthorized:false
//};

// UNCOMMENT THIS LINE AFTER INSTALLING CA CERTIFICATE
//credentials.ca = fs.readFileSync('ssl/server.crt', 'utf8');;

//var httpServer = http.createServer(app);
//var httpsServer = http.createServer(credentials,app);

// httpServer.listen(80, function() {
//    console.log("serviço http");
//   })  ;vi
////httpsServer.listen(443, function() {
//  console.log("serviço https");
//});