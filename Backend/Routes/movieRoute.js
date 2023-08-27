const express = require("express");
const { movieModel } = require("../model/movieModel");


const movieRoute = express.Router();

movieRoute.get("/", async (req, res) => {
    try {
        const page = parseInt(req.query.page) - 1 || 0;
        const limit = parseInt(req.query.limit) || 10;
        let search = req.query.search || "";
        let yearsearch = req.query.yearsearch || "";
        // yearsearch = typeof(yearsearch)==="String"? + yearsearch : yearsearch
        // search = typeof(search)==="String"? search : +search

        let sortOrder = req.query.sortOrder;
        let sortBy = req.query.sortBy ;
        let genre = req.query.genre;
        let sortOptions = {};
        if (sortBy && sortOrder) {
            sortOptions[sortBy] = sortOrder === 'asc' ? 1 : -1;
        }

        console.log(sortOptions)
        // {Title:{$regex:search,$options:"i"}}
        const movies1 = await movieModel.find(
            {
                $or: [
                    { Title: { $regex: search, $options: "i" } },
                    { Genre: { $regex: search, $options: "i" } },
                ],
                // Year: { $eq: yearsearch }
            }
        )
            .sort(sortOptions)
            .skip(page * limit)
            .limit(limit)


            const movies2 = await movieModel.find(
                {
                    Year: { $eq: yearsearch }
                }
            )
                .sort(sortOptions)
                .skip(page * limit)
                .limit(limit)
        let allMovie = yearsearch ? movies2 : search ? movies1 : movies1

        const response = {
            error: false,
            // total,
            pages: page + 1,
            limit,
            // genres:genreOptions,
            allMovie
        }
        // res.setHeader('Content-Type', 'application/json')
        res.status(200).json(response)
    } catch (err) {
        // console.log({ "err": err });
        // res.setHeader('Content-Type', 'application/json')
        res.status(500).json({ err: true, message: "Internal Server Error" })
    }
})


movieRoute.get("/:id", async(req,res)=>{
    const {id} = req.params
      try {
        const posts = await movieModel.findById(id)
        res.status(200).json({ "success": true, "message": posts });
    } catch (error) {
        res.status(404).json({ "success": false, "message": "Data not found" })
    }
})


movieRoute.post("/add", async (req, res) => {
    const payload = req.body;
    const {
        Title,
        Year,
        Released,
        Runtime,
        Genre,
        Director,
        Writer,
        Actors,
        Plot,
        Language,
        Country,
        Awards,
        Poster,
        imdbRating,
        Production
    } = payload
    const post = await movieModel.find({ Title: payload.Title })
    console.log(post)
    try {
        if (!Title ||
            !Year ||
            !Released ||
            !Runtime ||
            !Genre ||
            !Director ||
            !Writer ||
            !Actors ||
            !Plot ||
            !Language ||
            !Country ||
            !Awards ||
            !Poster ||
            !imdbRating ||
            !Production) {
            res.status(400).json({ "success": false, "message": "Input fields are missing" })
        }
        if (post.length > 0) {
            res.status(409).json({ "success": false, "message": "Item already in your cart" })
        }
        else {
            const new_post = new movieModel(payload);
            await new_post.save();
            res.status(201).json({ "success": true, "message": "Added in cart" });
        }
    } catch (error) {
        // console.log(error);
        res.status(404).json({ "success": false, "message": "something went wrong" });
    }
})

movieRoute.patch("/update/:id", async (req, res) => {
    const payload = req.body;
    const id = req.params.id;
    // const post =await movieModel.findOne({"_id":id});
    // const userID_in_post=post.userID;
    // const userID_in_req=req.body.userID;
    try {
        // if(userID_in_post!==userID_in_req){
        //     res.send({"msg":"You are not authorized"});
        // }
        // else{
        await movieModel.findByIdAndUpdate({ "_id": id }, payload);
        const post = await movieModel.findOne({ "_id": id });

        res.status(202).json({ "success": true, "message": "Updated the movie successfully", data: post });
        // }
    } catch (error) {
        res.status(404).json({ "success": false, "message": "Something went wrong" });
    }
})


movieRoute.delete("/delete/:id", async (req, res) => {
    const payload = req.body;
    const id = req.params.id;
    // const userID_in_post=post.userID;
    // const userID_in_req=req.body.userID;
    try {
        // if(userID_in_post!==userID_in_req){
        //     res.send({"msg":"You are not authorized"});
        // }
        // else{
        await movieModel.findByIdAndDelete({ "_id": id })
        const post = await movieModel.findOne({ "_id": id });
        res.status(202).json({ "success": true, "message": "Deleted the movie successfully", data: post });

    } catch (error) {
        console.log(err);
        res.status(404).json({ "success": false, "message": "Something went wrong" });
    }
})

module.exports = {
    movieRoute
}