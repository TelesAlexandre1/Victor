function userAuth(req, res, next) {
    if (req.session.OUSR != undefined) {
        next()
    } else {
        res.redirect("/")
    }
   

  
}

module.exports = userAuth