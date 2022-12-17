

/**
 * Simple Stock schema
 * 
*/

const mongoose = require("mongoose" );
const Schema = mongoose.Schema;


// --- child schema ---
const ShareSchema = require("./share.model.js");


const Stock = new Schema({
    symbol: {
        type: String,
        required: true,
    },
    shares: [ ShareSchema ],
    percentAvailable: {
        type: Number,
        default: 100,
        required: true,
    }, 
    currentRate: {
        type: Number,
        default: 1,
        required: true,
    }
})

mongoose.model("Stock", Stock);