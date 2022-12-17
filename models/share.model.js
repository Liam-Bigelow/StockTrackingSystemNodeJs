

/**
 * Simple Share schema
*/

const mongoose = require("mongoose" );
const Schema = mongoose.Schema;

const ShareSchema = new Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        required: true,
    },
    percent: {
        type: Number,
        required: true,
    },
    cost: {
        type: Number,
        required: true
    },
    symbol: {
        type: String,
        required: true
    }
})

mongoose.model("Share", ShareSchema);

module.exports = ShareSchema;