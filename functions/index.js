const functions = require('firebase-functions');
const admin = require('firebase-admin')
const express = require('express');
const cors = require('cors');
const app = express();
// Automatically allow cross-origin requests
app.use(cors({ origin: true }));

admin.initializeApp({ credential: admin.credential.applicationDefault() })
  
var db = admin.firestore()
app.get('/Api/About', (req, res) => {

    let data = db.collection('About').doc('y00Kx16TparwbpLqGbjD').get() 
    .then(c => {
        if (c.exists) {
            res.json({"Error" : false,"Result":c.data()})
        } else {
            res.json({"Error" : true,"Result":"Try agian ."})
        }
        return
    })
  });

exports.IsMe = functions.https.onRequest(app);
