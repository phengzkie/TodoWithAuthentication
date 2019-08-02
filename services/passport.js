const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
require('dotenv').config();

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id)
        .then(user => {
            done(null, user);
        });
});

passport.use(
    new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: '/auth/google/callback',
        proxy: true
    }, (accessToken, refreshToken, profile, done) => {
        User.findOne({ googleId: profile.id })
            .then((existingUser) => {
                if (existingUser) {
                    // we already have a record with a given profile ID
                    done(null, existingUser);
                    console.log('existing');
                } else {
                    // we dont have a user record with this ID, make a new record
                    new User({ googleId: profile.id })
                        .save()
                        .then(user => done(null, user));
                }
            });
        }
    )
);
