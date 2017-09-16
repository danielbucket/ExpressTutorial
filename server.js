const express = require('express');
const app = express();
const path = require('path');

const urlLogger = (req, res, next) => {
  console.log('Request URL:', req.url)
  next()
}

const timeLogger = (request, response, next) => {
  console.log('Datetime:', new Date(Date.now()).toString())
  next()
}

app.use(urlLogger, timeLogger)
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (request, response) => {

})

app.get('/json', urlLogger, timeLogger, (req,res) => {
	res.status(200).json({"name":"Jeffery"})
})

app.listen(3000, () => {
  console.log('Express Intro running on localhost:3000')
})