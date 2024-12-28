const express = require("express");
const router = express.Router();
const passport = require("passport");
const Song = require("../models/Song");
const User = require("../models/User");

router.post(
    "/create",
    passport.authenticate("jwt", {session: false}),
    async (req, res) => {
        // req.user getss the user because of passport.authenticate
        const {name, email, message, number, address, date,  pname, quantity, pid, warranty, ordno, dealer, price, selling } = req.body;
        if (!name || !email || !message || !number || !address || !date || !pname || !quantity || !pid || !warranty || !ordno || !dealer || !price || !selling ) {
            return res
                .status(301)
                .json({err: "Insufficient details to create song."});
        }
        const artist = req.user._id;
        const songDetails = {name, email, message, number, address, date,  pname, quantity, pid, warranty, ordno, dealer, artist, price, selling};
        const createdSong = await Song.create(songDetails);
        return res.status(200).json(createdSong);
    }
);

// Get route to get all songs I have published.
router.get(
    "/get/mysongs",
    passport.authenticate("jwt", {session: false}),
    async (req, res) => {
        // We need to get all songs where artist id == currentUser._id
        const songs = await Song.find({artist: req.user._id}).populate(
            "artist"
        ).sort({_id: -1});
        return res.status(200).json({data: songs});
    }
);

module.exports = router;