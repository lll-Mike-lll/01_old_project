const express = require('express');
const bodyPraeser = require('body-parser');
const app = express();
app.set("view engine","ejs");
app.use(bodyPraeser.urlencoded({extented:true}))
app.use(express.static("public"))
var item_array = [];

app.get('/', function(req,res){
  var today = new Date();
  var option = {
    weekday:"long",
    day : "numeric",
    month : "long"
  }
  var day = today.toLocaleDateString("en-US",option)
  res.render("list", {dateshow:day,newlist:item_array});
});

app.post('/',function(req,res){
   var item = req.body.newItem
   item_array.push(item)
  console.log(item_array);
  res.redirect("/")
})


const port = process.env.port || 3000
app.listen(port,function(){
  console.log('connect')
});



// var currentDay = today.getDay();
// var day = "";
// // var currentDay = 10
// switch (currentDay){
//   case 0:
//   day = "Sunday"
//   break;
//   case 1:
//   day = "Monday"
//   break;
//   case 2:
//   day = "Tuesday"
//   break;
//   case 3:
//   day = "Wednesday"
//   break;
//   case 4:
//   day = "Thursday"
//   break;
//   case 5:
//   day = "Friday"
//   break;
//   case 6:
//   day = "Saturday"
//   break;
//   default:
//   day = "Error"
//   console.log("Error: current day is equal to: "+ currentDay)
// }


// if (currentDay === 6 || currentDay === 0){
//   day = "weekend";
//   res.render("list", {dateshow:day});
// }
// else{
//   day = "weekday";
//   res.render("list", {dateshow:day});
// }

// res.sendFile(__dirname + '/index.html')
