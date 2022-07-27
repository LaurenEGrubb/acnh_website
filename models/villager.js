const mongoose = require( 'mongoose' )
const Schema = mongoose.Schema

const Villager = new Schema(
    {
        
        name: { type: String, required: true },
        description: { type: String, required: false },
        image: { type: String, required: false }, //change to true//
        review: { type: Array, required: false },
       rate: { type: Array, required: false  }

    },
    { timestamps: true },
)

module.exports = mongoose.model('Villager', Villager)