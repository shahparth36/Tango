require("dotenv/config");
var express               = require("express"),
    passport              = require("passport"),
    app                   = express(),
    bodyParser            = require("body-parser"),
    mongoose              = require("mongoose"),
    flash                 = require("connect-flash");
    LocalStrategy         = require("passport-local"),
    methodOverride        = require("method-override"),
    passportLocalMongoose = require("passport-local-mongoose"),
    User                  = require("./models/user");
    async                 = require("async"),
    nodemailer            = require("nodemailer"),
    crypto                = require("crypto")
    multer = require('multer');

 
//REQURING ROUTES
var profileRoutes = require("./routes/profile");
var indexRoutes = require("./routes/index"); 
var landingRoutes = require("./routes/landings"); 
var exploreRoutes = require("./routes/explore"); 


// mongoose.connect("mongodb://localhost/dating_apps", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
mongoose.connect(
  "mongodb+srv://Parth01:parth_shah1936@cluster0.exb3l.mongodb.net/test1?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
);
var app = express();
app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));
app.use(methodOverride("_method"));
app.use(flash());

app.use(bodyParser.urlencoded({extended: true}));
app.use(require("express-session")({
    secret: "Rusty is the best and cutest dog in the world",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());


passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
  res.locals.currentUser = req.user;
  res.locals.error = req.flash("error")
  res.locals.success = req.flash("success")
  next();
});


app.get("/home", function(req,res){
  res.render("home")
})

app.use(profileRoutes);
app.use(indexRoutes);
app.use(landingRoutes);
app.use(exploreRoutes);


  app.listen(process.env.PORT || 3000, process.env.IP, function(){
    console.log("The Server is listening on " + process.env.PORT);
 });
    