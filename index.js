const express = require('express')
const app = express()

app.get('/about', function (req, res) {
    // init 111 tets
  res.send('Hello World 999')
})

app.listen(3003)