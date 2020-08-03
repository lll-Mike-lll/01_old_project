var express = require('express');
var app = express();

app.get('/',function(req,res){
  res.send('mike_test_gcloud')
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
