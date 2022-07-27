const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const routes = require('./routes/routes.js');
const db = require('./db')
const PORT = process.env.PORT || 3003
const app = express()
app.use(cors())
app.use(express.json())
app.use(logger('dev'))
app.use('/', routes);

app.get('/villagers/rate', (req, res) => {
  res.send("Collecting villager's rating...")
})
app.get('/villagers/review', (req, res) => {
  res.send("Collecting villager's review...")
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

