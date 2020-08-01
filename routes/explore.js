require("dotenv/config");
var express      = require("express");
var router       = express.Router();
var User         = require("../models/user");  
var cities       = require("all-countries-and-cities-json");
var indianCities = cities["India"];
var middleware   = require("../middleware")


router.get("/explore",middleware.isLoggedIn, function (req, res) {
    var noMatch = null; 
    if (Object.keys(req.query).length > 0) {
        User.find( filter(req) , function (err, allUsers) {
            if (err) {
                console.log(err);
                req.flash("error", "Something went wrong.");
                return res.redirect("back");
            }else{
                if(allUsers.length < 1){
                    req.flash("error","No user exists" );
                    return res.redirect("/explore");
                }
            }
            res.render("explore", {
                foundUser: shuffle(allUsers),
                noMatch: noMatch,
                indianCities: indianCities
            }) 
        })
    } 
    else {
    //Get all users      
       User.find({
           _id:{
           $ne:req.user
           }
        }
            ,function(err,foundUser){
            if(err){
                console.log(err);
                res.redirect("back");
            }
            else {
                // render explore.ejs file
                res.render("explore", {foundUser: shuffle(foundUser),noMatch: noMatch, indianCities: indianCities});
            }
        });
    }
  });
  
  router.post("/explore", function(req, res) {
    User.find({
        _id: {
            $ne: req.user
        }
    }, function(err,foundUser){
        if (err) {
            req.flash("error", "Something went wrong.");
            return res.redirect("back");
        }
    
        return res.redirect("/explore");
    })
});
function filter(req) {
    var search1 = {_id:{$ne:req.user}};
    if (req.query.fullName) {
        search1.fullName = new RegExp(escapeRegex(req.query.fullName), 'gi');
    }
    if (req.query.username) {
        search1.username = new RegExp(escapeRegex(req.query.username), 'gi');
    }
    if (req.query.sexuality) {
        search1.sexuality = new RegExp(escapeRegex(req.query.sexuality), 'gi');
    }
    if (req.query.gender) {
        search1.gender = new RegExp(escapeRegex(req.query.gender), "gi");
    }
    if (req.query.city) {
        search1.city = new RegExp(escapeRegex(req.query.city), "gi");
    }
    if (req.query.age) {
        search1.age = {
            $gte: req.query.age[0],
            $lte: req.query.age[1]
        }
    }
    return search1;
}

function shuffle(array) {
    let counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}



function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}

module.exports = router;