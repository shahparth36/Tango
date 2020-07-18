var mongoose=require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var UserSchema =new mongoose.Schema({
    username: { type: String, unique: true, required: true },
    password:String,
    firstName: String,
    lastName: String,
    fullName:String,
    email: { type: String, unique: true, required: true },
    resetPasswordToken: String,
    resetPasswordExpires: Date,
    phNumber:String,
    image: String,
    imageId: String,
    DOB: String,
    city: String,
    gender: String,
    maritalStatus: String,
    relType: String,
    sexuality:String,
    liveIn: String, 
    smoke:String,
    alcohol:String,
    age:Number,
    bio:String,
    relInitialAge:Number,
    relFinalAge:Number,
    images: [{ url: String, public_id: String }],
    insta_url:String,
    facebook_url:String,
    twitter_url:String
});

UserSchema.plugin(passportLocalMongoose, {
    usernameQueryFields: ["phNumber","email"]
});


module.exports=mongoose.model("User",UserSchema) 