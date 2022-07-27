const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const PORT = process.env.PORT || 3002
const db = require('./db')

const app = express()

app.use(cors())
app.use(express.json())
app.use(logger('dev'))

app.get('/villagers/details', (req, res) => {
  res.send("Collecting villager information...")
})

app.get('/villagers', (req, res) => {
  res.send("Getting villagers...")
})

app.get('/', (req, res) => {
  res.send('This is home!')
})

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})