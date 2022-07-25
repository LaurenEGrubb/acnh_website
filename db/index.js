const mongoose = require('mongoose')

mongoose
  .connect('mongodb+srv://cluster0.cvjaw0c.mongodb.net/villagersDatabase')
  .then(() => {
    console.log('Successfully connected to MongoDB.')
  })
  .catch((e) => {
    console.error('Connection error', e.message)
  })

const db = mongoose.connection

module.exports = db