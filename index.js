const express = require('express')
const app = express()

app.get('/contact', function (req, res) {
  res.send('Hello World')
})

app.listen(3003)