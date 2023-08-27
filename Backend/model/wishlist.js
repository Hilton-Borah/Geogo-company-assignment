const mongoose = require("mongoose");

const wishlistSchema=mongoose.Schema({
  ID:String,
  Title:String,
  Genre:String,
  Year:Number,
  Poster:String,
  userID:String,
});

const WishlistModel=mongoose.model("wishlist",wishlistSchema);

module.exports={
  WishlistModel
}