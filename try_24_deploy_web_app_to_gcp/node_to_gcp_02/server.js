var express = require('express');
var app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text())


var firebase = require('firebase');
var config = {
  apiKey: "AIzaSyBZW7EVvoJrbEwFviPGFwujMGrwzpAp16k",
  authDomain: "test-firebase-01-73a9d.firebaseapp.com",
  databaseURL: "https://test-firebase-01-73a9d.firebaseio.com",
  projectId: "test-firebase-01-73a9d",
  storageBucket: "test-firebase-01-73a9d.appspot.com",
  messagingSenderId: "1037166017030",
  appId: "1:1037166017030:web:460a85d3430ae6ef852187",
  measurementId: "G-1VPSN78LK8"
};
firebase.initializeApp(config);
var database = firebase.database();
var ref = database.ref('esp8266/test_send1')
// var d = Date(Date.now());
// a = d.toString();
app.get('/',function(req,res){
  console.log('success')
  res.send('mike')
});

app.post('/',function(req,res){
  var d = Date(Date.now());
  a = d.toString();
  console.log("{code:" + req.body.code + " ,temp:" + req.body.value +"}"+ " || at: " + a);
  // console.log(a);
  var data = {
    date_id : a,
    code : req.body.code,
    temperature : req.body.value
  }
  ref.push(data);
  res.sendStatus(200);
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
