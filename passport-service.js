const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys.js');
const firebase = require('firebase');
require('firebase/firestore');
const firebaseConfig = {
    apiKey: keys.firebaseApiKey,
    authDomain: "my-cart-c18bf.firebaseapp.com",
    projectId: "my-cart-c18bf",
    storageBucket: "my-cart-c18bf.appspot.com",
    messagingSenderId: "307494522528",
    appId: "1:307494522528:web:e0d391decfefa5736d43c5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

passport.serializeUser((user,done)=> {
    done(null,user.id);
});

passport.deserializeUser((id,done) => {
    firebase.firestore()
    .collection('users').doc(id).get().then(user=> {
        done(null, user);
    });
})
passport.use(new GoogleStrategy( {
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
    firebase.firestore()
    .collection('users').where('googleId', '==', profile.id).get().then(existingUser => {
        if (existingUser.exists) {
            done(null,existingUser);
        } else {
            firebase.firestore()
            .collection('users').doc().set({
                  googleId: profile.id
                }).then(() => {
                    console.log("Document successfully written!");
                })
                .catch((error) => {
                    console.error("Error writing document: ", error);
                });
        }
    })

    console.log('accessToken',accessToken);
    console.log('refreshToken',refreshToken);
    console.log('profile',profile);
}));