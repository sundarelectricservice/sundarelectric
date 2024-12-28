const express = require("express");
const mongoose = require("mongoose");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const passport = require("passport");
require("dotenv").config();
const cors = require("cors");

const app = express();
const port = process.env.PORT || 8080;
const authRoutes = require("./routes/auth");
const songRoutes = require("./routes/song");
const User = require("./models/User");

// Enable CORS
app.use(cors({
  origin: "https://sundarelectricservice.onrender.com", // Allow the frontend domain
  credentials: true, // Allow cookies and other credentials
}));

// Middleware for parsing JSON
app.use(express.json());

// Connect MongoDB to Node.js app
mongoose
  .connect(
    `mongodb+srv://sundarelectricservice:${process.env.mongo_password}@cluster0.ddgyf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB!");
  })
  .catch((err) => {
    console.error("Error while connecting to MongoDB:", err);
  });

// Setup Passport-JWT strategy
const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: "thisKeyIsSupposedToBeSecret", // Replace with a secure key in production
};

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

// Routes
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/auth", authRoutes);
app.use("/song", songRoutes);
// Uncomment and implement these routes if needed
// app.use("/playlist", playlistRoutes);
// app.use("/users", userRoutes);

// Start server
app.listen(port, () => {
  console.log("App is running on port " + port);
});
