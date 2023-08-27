require("./config/db")
require('dotenv').config()
const express = require("express");
const cors = require("cors");
const { movieRoute } = require("./Routes/movieRoute");
const {userRoute} = require("./Routes/userRoute");
const { WishlistRouter } = require("./Routes/wishlist");
// const { CartRouter } = require("./Routes/cart.route");
const app = express();

app.use(cors({
    origin:"*"
}))



app.use(express.json());
app.use(cors())
app.use("/movie",movieRoute);
app.use("/user",userRoute)
app.use("/wishlist",WishlistRouter)


app.listen(process.env.PORT,()=>{
    console.log(`Server running on port ${process.env.PORT}`)
})


// "name":"halje",
// "email":"hiltonborah123@gmail.com",
// "password":"Abc123@",
// "dateOfBirth":"85478"