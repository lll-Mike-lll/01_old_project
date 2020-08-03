var express = require('express')
var app = express()
const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text())


app.get('/',function(req,res){
  res.send(a);
  console.log('connect')
})

app.post('/',function(req,res){
  var d = Date(Date.now());
  a = d.toString();
  console.log("{code:" + req.body.code + " ,temp:" + req.body.value +"}"+ " || at: " + a);
  // console.log(a);
    res.sendStatus(200);
})

app.listen(80)
