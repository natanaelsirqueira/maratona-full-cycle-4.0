const express = require('express')

const app = express()

app.get('/', (_request, response) => {
  return response.send('Eu sou Full Cycle')
})

app.listen(8080, () => {
  console.log('Server running on port 8080!')
})
