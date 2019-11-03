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
  app.get('/Api/Skill',async (req, res) => {
 
    const noteSnapshot = await db.collection('Skill').get();
    const notes = [];
    noteSnapshot.forEach((doc) => {
        notes.push({
           id: doc.id,
           Result: doc.data()
        });
    });
    res.json(notes);
});
app.get('/Api/Education',async (req, res) => {
 
    const noteSnapshot = await db.collection('Education').get();
    const notes = [];
    noteSnapshot.forEach((doc) => {
        notes.push({
           id: doc.id,
           Result: doc.data()
        });
    });
    res.json(notes);
});
app.get('/Api/Experience',async (req, res) => {
 
    const noteSnapshot = await db.collection('Experience').get();
    const notes = [];
    noteSnapshot.forEach((doc) => {
        notes.push({
           id: doc.id,
           Result: doc.data()
        });
    });
    res.json(notes);
});
app.get('/Api/Project',async (req, res) => {
 
    const noteSnapshot = await db.collection('Project').get();
    const notes = [];
    noteSnapshot.forEach((doc) => {
        notes.push({
           id: doc.id,
           Result: doc.data()
        });
    });
    res.json(notes);
});
exports.IsMe = functions.https.onRequest(app);
