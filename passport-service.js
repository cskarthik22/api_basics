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
    console.log("serialize step - ", user);
    
    done(null,user.id);
});

passport.deserializeUser((id,done) => {
    firebase.firestore()
    .collection('users').doc(id).get().then(user=> {
        done(null, user);
    });
});
passport.use(new GoogleStrategy( {
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
    firebase.firestore()
    .collection('users').where('googleId', '==', profile.id).limit(1).get().then(user => {
        if (user.empty) {
            firebase.firestore()
            .collection('users').doc().set({
                  googleId: profile.id
                }).then((user) => {
                    done(null,user);
                    console.log("Document successfully written!", user);
                });
            
        } else {
            const data = user.docs[0].data();
            data['id'] = user.docs[0].id;
            console.log("Document already exists.(user1).....!", data);
          
           
            done(null,data);
        }
    })

    console.log('accessToken',accessToken);
    console.log('refreshToken',refreshToken);
    console.log('profile',profile);
}));