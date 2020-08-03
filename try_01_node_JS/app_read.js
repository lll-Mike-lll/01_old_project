var fs = require('fs');

fs.readFile('message.txt', function(err, data) {
  if (err) throw err;

  console.log(data.toString('utf8'));
});