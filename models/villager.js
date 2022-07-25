const mongoose = require( 'mongoose' )
const Schema = mongoose.Schema

const Villager = new Schema(
    {
        
        name: { type: String, required: true },
        description: { type: String, required: true },
        image: { type: String, required: true },
        review: { type: Array, required: false },
       rate: { type: Array, required: false  }

    },
    { timestamps: true },
)

module.exports = mongoose.model('Villager', Villager)