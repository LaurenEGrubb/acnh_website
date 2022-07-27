const mongoose = require('mongoose')

mongoose
  .connect('mongodb+srv://lgrubb1:1234@cluster0.jr5sqbx.mongodb.net/villagerDatabase')
  .then(() => {
    console.log('Successfully connected to MongoDB.')
  })
  .catch((e) => {
    console.error('Connection error', e.message)
  })

const db = mongoose.connection

module.exports = db