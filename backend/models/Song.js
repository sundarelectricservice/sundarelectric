const mongoose = require("mongoose");
// How to create a model
// Step 1 :require mongoose
// Step 2 :Create a mongoose schema (structure of a user)
// Step 3 : Create a model

const Song = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    number: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    }, 
    pname: {
        type: String,
        required: true,
    }, 
    quantity: {
        type: String,
        required: true,
    }, 
    pid: {
        type: String,
        required: true,
    }, 
    warranty: {
        type: String,
        required: true,
    },
    ordno: {
        type: String,
        required: true,
    },
    dealer: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    selling: {
        type: String,
        required: true,
    },
    artist: {
        type: mongoose.Types.ObjectId,
        ref: "User",
    },
});

const SongModel = mongoose.model("Song", Song);

module.exports = SongModel;