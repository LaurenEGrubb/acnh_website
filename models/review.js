const mongoose = require( 'mongoose' )
const Schema = mongoose.Schema

const Review = new Schema(
    {
        villager_id: { type: Schema.Types.ObjectId, ref: 'Villager' },
        content: { type: String, required: true }, 
    },
    { timestamps: true }
)

module.exports = mongoose.model('Review', Review) 