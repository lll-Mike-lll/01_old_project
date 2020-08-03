const { MongoClient } = require("mongodb");
const assert = require('assert');
// Replace the following with your Atlas connection string

const url = "mongodb+srv://lll_cax_lll:db845562@cluster-for-line-bot-cvm4d.gcp.mongodb.net/test?retryWrites=true&w=majority";

const client = new MongoClient(url);

client.connect(err => {
  const db = client.db("stock_name");
  // perform actions on the collection object

var cursor = db.collection('set_100').find({});
function iterateFunc(doc) {
   console.log(JSON.stringify(doc, null, 4));
}

function errorFunc(error) {
   console.log(error);
}

cursor.forEach(iterateFunc, errorFunc);

  // db.collection('set_100').insertOne({
  //   item: "canvas",
  //   qty: 100,
  //   tags: ["cotton"],
  //   size: { h: 28, w: 35.5, uom: "cm" }
  // })

  // let a = db.collection('set_100').find();
  // console.log(a);
  client.close();
});
