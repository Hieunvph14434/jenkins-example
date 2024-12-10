const express = require('express')
const app = express()

app.get('/aboutHome', function (req, res) {
  res.send('Hello World 999')
  console.log('123');
})

app.listen(3003)