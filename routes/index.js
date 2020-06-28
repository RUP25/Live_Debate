var express = require("express");
var router  = express.Router();
var User = require("../models/user");
let ejs = require("ejs");

//root route
router.get("/", function(req, res){
    res.render("register");
});

//handle sign up logic
router.post("/register", function(req, res){
    var newUser = new User({username: req.body.username});

    User.register(newUser, function(err, user){
        if(err){
            console.log(err);
            return res.render("register", {error: err.message});
        }
        else (req, res, function(){
           req.alert("success", "Successfully Signed Up! Nice to meet you " + req.body.username);
           res.redirect("/topic"); 
        });
    });
});

module.exports = router;