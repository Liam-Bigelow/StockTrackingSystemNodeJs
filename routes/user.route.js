
const express = require("express");
const router = express.Router();

const bcrypt = require("bcrypt");

const passport = require("passport");
const LocalStrategy = require('passport-local');
const mongoose = require("mongoose");

// bring in user model
require( "../models/user.model" );
const User = mongoose.model( "User" );


/** 
 * First define how we are going to handle authentication
 * 
 * going to use a local-strategy to deal with user authentication
 * 
 * - https://www.passportjs.org/packages/passport-local/
 * - https://github.com/jaredhanson/passport-local
 */


// configure authentication strategy
passport.use(new LocalStrategy(function verify(username, password, done) {
    User.findOne({username: username }).lean()
    .then( (user) => {
        if( !user ){
            return done(null, false, { message: 'User does not exists.' });        
        }

        // we have a user but need to make sure it is valid
        bcrypt.compare(password, user.password, (error, isMatch) => {
            if (error){
                return done( error );
            }

            return isMatch ? done( null, user ) : done(null, false, { message: "Password incorrect." });
        });
    })
    .catch( (error) => {
        return done( error );
    });
}));

// configure session management
passport.serializeUser(function(user, done) {
    process.nextTick(function() {
        done(null, { id: user._id, username: user.username });
    });
});
  
passport.deserializeUser(function(user, done) {
    process.nextTick(function() {
        return done(null, user);
    });
});



/**
 * -- Task ---
 * 
 * - user login/logout
 * 
 * 
 * ###################################
 *  User: User1234
 *  Pass: Pass1234
 * ###################################
 */


const {ensureAuthenticated} = require("./middleware/authentication.middleware" );

const controller = require( "../controllers/user.controller");

router.get( "/dashboard", ensureAuthenticated, (req, res) => {
    res.status(200).send( "User logged in..." );
});

// login
router.post('/login', passport.authenticate('local', {
    successReturnToOrRedirect: '/user/dashboard',
    failureRedirect: '/',
    failureMessage: true
}));

// logout
router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

router.put("/wallet", (req, res) => {
    
});


module.exports = router;