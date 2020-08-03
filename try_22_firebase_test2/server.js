// var express = require('express')
// var app = express()
var firebaseConfig = {
  apiKey: "AIzaSyBZW7EVvoJrbEwFviPGFwujMGrwzpAp16k",
  authDomain: "test-firebase-01-73a9d.firebaseapp.com",
  databaseURL: "https://test-firebase-01-73a9d.firebaseio.com",
  projectId: "test-firebase-01-73a9d",
  storageBucket: "test-firebase-01-73a9d.appspot.com",
  messagingSenderId: "1037166017030",
  appId: "1:1037166017030:web:460a85d3430ae6ef852187",
  measurementId: "G-1VPSN78LK8"
};

firebase.initializeApp(firebaseConfig);
// console.log(firebase);
var database = firebase.database();
var ref = database.ref('user/user4')
var d = Date(Date.now());
a = d.toString();
var data = {
  date_id : a,
  name : "mm"
}

ref.push(data);


// app.get('/',function(req,res){
//   console.log('connect')
// })
