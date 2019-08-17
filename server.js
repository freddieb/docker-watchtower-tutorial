const express = require('express')
const app = express()

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send(`Hello from the server! The time is ${new Date()}.`)
})

app.listen(port, err => {
  if (err) {
    return console.error('The server could not start', err)
  }

  console.info(`Server listening on port ${port}`)
})