const mongoose = require( 'mongoose' )
const Schema = mongoose.Schema

const Villager = new Schema(
    {
        
        name: { type: String, required: true },
        description: { type: String, required: true },
        image: { type: String, required: false }, 
        reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }]
     

    },
    { timestamps: true }
)

module.exports = mongoose.model('Villager', Villager)