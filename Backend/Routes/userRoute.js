const { userModel } = require("../model/userModel")
const express = require("express");
const jwt = require("jsonwebtoken");

const userRoute = express.Router()

userRoute.post("/register", async (request, response) => {
  let payload = await request.body;
  let { email } = payload;
  //   await connection
  try {
    let userEmail = await userModel.findOne({ email })
    // console.log(userEmail)
    if (userEmail) {
      response.status(400).json({ success: "User already exist" },)
    } else {
      // bcrypt.hash(password, 5, async (err, hased_pass) => {
      //   if (err) {
      //     console.log("er")
      //   } else {
      let user = await new userModel(payload)
      await user.save()
      response.status(201).json({ success: "Your account created successfully" })
      //   }
      // })
    }

  } catch (error) {
    response.status(404).json({ success: "Something went wrong" })
  }
})



userRoute.post("/login", async (request, response) => {
  let { email, password } = request.body;
  try {
    let user = await userModel.find({ email,password });
    // console.log(user)
    if (user.length > 0) {
      const token = jwt.sign({ course: user[0]._id }, 'hilton')
      response.status(201).json({ "message": "Login Successfully", "token": token, "id": user[0]._id, "user": user[0] })
    } else {
      response.status(404).json({ success: "Wrong credentials" })
    }
  } catch (error) {
    response.status(404).json({ success: "Something went wrong" })
  }
})


module.exports = {
  userRoute
}