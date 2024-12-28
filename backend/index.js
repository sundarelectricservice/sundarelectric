const express = require("express");
const mongoose = require("mongoose");
const JwtStrategy = require("passport-jwt").Strategy,
    ExtractJwt = require("passport-jwt").ExtractJwt;
const passport = require("passport");
require("dotenv").config();
const cors = require("cors");
const app = express();
const port = process.env.PORT || 8080;
const authRoutes = require("./routes/auth");
const songRoutes = require("./routes/song");
const User = require("./models/User");

app.use(cors({
  origin: "https://sundarelectricservice.onrender.com",
  credentials: true,
}));
app.use(express.json());

// connect mongodb to our node app. mongodb+srv://sundarelectricservice:<db_password>@cluster0.ddgyf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
// mongoose.connect() takes 2 arguments : 1. Which db to connect to (db url), 2. 2. Connection options
mongoose
    .connect(
        "mongodb+srv://sundarelectricservice:"+process.env.mongo_password+"@cluster0.ddgyf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
    .then((x) => {
        console.log("Connected to Mongo!");
    })
    .catch((err) => {
        console.log("Error while connecting to Mongo");
    });

// setup passport-jwt
let opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = "thisKeyIsSupposedToBeSecret";
passport.use(
    new JwtStrategy(opts, async (jwt_payload, done) => {
        try {
            const user = await User.findOne({ _id: jwt_payload.identifier });
            if (user) {
                return done(null, user); // User found
            } else {
                return done(null, false); // No user found
            }
        } catch (err) {
            return done(err, false); // Error occurred
        }
    })
);

// API : GET type : / : return text "Hello world"
app.get("/", (req, res) => {
    // req contains all data for the request
    // res contains all data for the response
    res.send("Hello World");
});
app.use("/auth", authRoutes);
app.use("/song", songRoutes);
// app.use("/playlist", playlistRoutes);
// app.use("/users", userRoutes);

// Now we want to tell express that our server will run on localhost:8000
app.listen(port, () => {
    console.log("App is running on port " + port);
});
