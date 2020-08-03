const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/node-api-101', { useNewUrlParser: true })

app.use(express.json())

// ????? database schema
const Cat = mongoose.model('Cat', { name: String })

// ????? instance ??? model
const kitty = new Cat({ name: 'JavaScript' })

// save ?? database (return ???? Promise)
kitty.save().then(() => console.log('meow'))