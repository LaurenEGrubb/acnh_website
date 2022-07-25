
const mongoose = require( 'mongoose' )
const Schema = mongoose.Schema

const ratingSchema = new Schema(
   {

   rating: { type: String, required: true },
   villager_id: { type: Schema.Types.ObjectId, ref: 'villager_id' },
},   
    { timestamps: true }
  )
  
  module.exports = ratingSchema