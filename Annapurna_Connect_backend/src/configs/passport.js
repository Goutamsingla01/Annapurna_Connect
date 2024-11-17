require("dotenv").config();

const GoogleStrategy = require("passport-google-oauth20").Strategy;
const LocalStrategy = require("passport-local").Strategy;
const passport = require("passport");
const bcrypt = require("bcrypt");
const User = require("../models/user.model");

const { v4: uuidv4 } = require("uuid");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.clientId,
      clientSecret: process.env.clientSecret,
      callbackURL: `${process.env.BACKEND_URL}/auth/google/callback`,
    },
    async function (accessToken, refreshToken, profile, cb) {
      const email = profile?._json?.email;
      const name = profile?._json?.name;
      const picture = profile?._json?.picture;
      let user;
      try {
        user = await User.findOne({ email }).lean().exec();

        if (!user) {
          user = await User.create({
            email: email,
            password: uuidv4(),
            name: name,
            profilePic: picture,
          });
        }

        return cb(null, user);
      } catch (err) {
        console.log({ err });
      }
    }
  )
);

passport.use(
  new LocalStrategy(
    { usernameField: "email", passwordField: "password" },
    async (email, password, done) => {
      try {
        const user = await User.findOne({ email }).lean().exec();
        if (!user) {
          console.log("reached")
          return done(null, false, { message: "Invalid email " });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
          return done(null, false, { message: "Invalid email or password" });
        }

        return done(null, user);
      } catch (err) {
        return done(err);
      }
    }
  )
);

module.exports = passport;
