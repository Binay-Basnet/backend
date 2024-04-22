import express from "express"
import signin from "../controller/signin.js"
import signup from "../controller/signup.js"
let router = express.Router()

router.post("/signup",  signup)

router.post("/signin", signin)

export default router 