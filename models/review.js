const mongoose = require( 'mongoose' )
const Schema = mongoose.Schema


const reviewSchema = new Schema(
    {
 
    review: { type: String, required: true },
    text: { type: String, required: true },
    name: { type: String, required: true },
    villager: { type: Schema.Types.ObjectId, ref: 'Villager'},
 },   
     { timestamps: true }
   )
   
   module.exports = reviewSchema