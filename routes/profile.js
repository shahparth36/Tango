require("dotenv/config");
var express = require("express");
var router = express.Router();
var User = require("../models/user");


router.get("/profile/:id", function (req, res) {
    User.findById(req.params.id,function(err,foundUser){
        if(err){
            console.log(err)
        } else{
            res.render("viewProfile",{
                user:foundUser
            });
        }    
    });
});
 
module.exports = router;  