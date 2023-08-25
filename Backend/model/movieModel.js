const mongoose = require("mongoose");

const movieSchema=mongoose.Schema({
        Title: String,
        Year: Number,
        Released: String,
        Runtime: String,
        Genre: String,
        Director: String,
        Writer: String,
        Actors: String,
        Plot: String,
        Language: String,
        Country: String,
        Awards: String,
        Poster: String,
        imdbRating: Number,
        Production: String
});

const movieModel=mongoose.model("movie",movieSchema);

module.exports={
    movieModel
}


// "mainImage": "https://rukminim1.flixmovie.com/image/832/832/xif0q/shirt/h/3/j/m-crc-den-01-carbonn-blue-original-imafv2h7g7bvgfdz-bb.jpeg?q=70",
//       "categories": "CarbonnCloth",
//       "title": "Men Regular Fit Solid Cut Away Collar Casual Shirt",
//       "price": 500,
//       "realPrice": 700,
//       "quantity": 1,
//       "id": 4