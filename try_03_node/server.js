const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/node-api-101', { useNewUrlParser: true })

app.use(express.json())

const Cat = mongoose.model('Cat', { name: String })


const kitty = new Cat({ name: 'JavaScript' })


kitty.save().then(() => console.log('meow'))