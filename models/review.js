const mongoose = require( 'mongoose' )
const Schema = mongoose.Schema

const Review = new Schema(
    {
        ride_id: { type: Schema.Types.ObjectId, ref: 'villager_id' },
        review: { type: String, required: false },
    },
    { timestamps: true },
)

module.exports = mongoose.model('Review', Review) 