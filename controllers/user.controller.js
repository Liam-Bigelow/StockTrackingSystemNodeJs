
/**
 * -- Task ---
 * 
 * - Your system should have support for users to login/logout.
 * - Users should be able to add balance to their wallet.
 */


const mongoose = require('mongoose');
const bcrypt = require('bcrypt'); // need to hash passwords

const { DatabaseError, InputError, UnsupportedError } = require( "../helpers/errors" );

// bring in user model
require( "../models/user.model" );
const User = mongoose.model( "User" );


// ### Controller functions ###

const walletIncrease = ( userId, amountToIncrease ) => {
    return new Promise( (resolve, reject) => {
        User.findByIdAndUpdate( userId, {
            $inc: {
                "wallet": amountToIncrease
            }
        }, "wallet").exec().lean()
        .then( (updatedUser) => {
            resolve( updatedUser.wallet );
        })
        .catch( (error) => {
            reject( new DatabaseError( error.message ) );
        })
    });
}



module.exports = {
    walletIncrease
}



