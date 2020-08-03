const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const books = require('./db.json')
const data_company = require('./data_test_line_bot_v1.json')
app.use(bodyParser.json())
var fs = require('fs')
const content = fs.readFileSync('data_test_line_bot_v1.json','utf8')
const content_02 = fs.readFileSync('data_test_line_bot_v2.json','utf8')
var name = 'mike'
obj_content = JSON.parse(content)
obj_content_02 = JSON.parse(content_02)
let list_data = obj_content_02['set']

app.get('/', (req, res) => {
res.send('BBL : '+ obj_content['BBL']['industry'])
})

app.get('/all', (req, res) => {
res.send(obj_content)
})

app.get('/loop', (req, res) => {
res.send(obj_content_02['set'][0]["symbol"])
})

app.get('/p', (req, res) => {
res.send(req.query.name)
})

app.get('/p_loop_2', (req, res) => {
  for (let i=0;i<list_data.length;i++){
    if (obj_content_02['set'][i]['symbol'] === req.query.name.toUpperCase()) {
      res.send(obj_content_02['set'][i])
      return;
    }
  }
  res.send('not_match : '+ req.query.name)
})

app.get('/p_loop', (req, res) => {
  for (let i=0;i<list_data.length;i++){
    if (obj_content_02['set'][i]['symbol'] === req.query.name.toUpperCase()) {
      res.send('name: ' + obj_content_02['set'][i]['company'] +"\n"+'market :'+obj_content_02['set'][i]['market'])
      return;
    }
  }
  res.send('not_match : '+ req.query.name)
})

app.get('/loop3', (req, res) => {
  if (obj_content_02['set'][0]['symbol'] === name.toUpperCase()) {
    res.send(obj_content_02['set'][0])
    return;
  }
  res.send('not_match')
})

app.get('/loop2', (req, res) => {
  for (let i=0;i<10;i++){
    if (obj_content_02['set'][i]['symbol'] === 'AAV') {
      res.send(obj_content_02['set'][i])
      return;
    }
  }
  res.send('not_match : '+name.toUpperCase())
})

app.get('/loop4', (req, res) => {
  for (let i=0;i<700;i++){
    if (obj_content_02['set'][i]['symbol'] === name.toUpperCase()) {
      res.send(obj_content_02['set'][i])
      return;
    }
  }
  res.send('not_match : '+name.toUpperCase())
})

app.get('/loop5', (req, res) => {
  for (let i=0;i<list_data.length;i++){
    if (obj_content_02['set'][i]['symbol'] === name.toUpperCase()) {
      res.send(obj_content_02['set'][i])
      return;
    }
  }
  res.send('not_match : '+name.toUpperCase())
})

app.listen(3000, () => {
  console.log('Start server at port 3000.')
})

app.get('/books', (req, res) => {
  res.json(books)
})
app.post('/books', (req, res) => {
  books.push(req.body)
  res.status(201).json(req.body)
})

app.get('/books_update', (req, res) => {
  books.push({
    "id": "3",
    "name": "mike_add_2"
  })
  res.status(201).send('finish')
})

app.get('/stock_get_data', (req, res) => {
  res.json(data_company['AAV'])
})

app.get('/deep_company', (req, res) => {
  res.json(data_company['AAV']['industry'])
})
