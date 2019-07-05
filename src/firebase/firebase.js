import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_API_ID
}

firebase.initializeApp(firebaseConfig)

const database = firebase.database()

export { firebase, database as default } 

// database.ref('notes').once('value')
// .then((snap) => {
//     // console.log(snap.val())
//     const notes = []
//     snap.forEach((child) => {
//         notes.push({
//             id: child.key,
//             ...child.val()
//         })
//     })

//     console.log(notes)
// })

// database.ref('notes').on('value', (snap) => {
//     const notes = []
//     snap.forEach((child) => {
//         notes.push({
//             id: child.key,
//             ...child.val()
//         })
//     })

//     console.log(notes)
// })


// database.ref('notes').push({
//     title: 'Crappy',
//     body: 'To do crappy'
// })

// database.ref('notes').push({
//     title: 'Work',
//     body: 'To do work'
// })

// database.ref('notes').push({
//     title: 'Nothing',
//     body: 'To do nothing'
// })

// database.ref('notes/-Lj2qNAF-J5gkAVzNU0q').remove()
// Set DATA

// database.ref().set({
//     name: 'Andy',
//     age: 25,
//     isSingle: true,
//     location: {
//         city: 'Noida',
//         country: 'India'
//     }
// })

// // database.ref().set('This is a data')

// // database.ref('age').set(90)
// database.ref().update({
//     name: 'Goga',
//     'location/city': 'New York'
// }).then((data) => console.log(data))

// Get DATA

// One time
// database.ref('location/city').once('value').then((snapshot) => {
//     const val = snapshot.val()
//     console.log(val)
// }).catch((e) => console.log(e))

// On data change
// database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val())
// })
