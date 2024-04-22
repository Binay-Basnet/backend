import express from "express"
import {authenticateToken} from "../middleware/middleware.js"
import { postCoronoSurvey, getallCoronaSuvey, getCoronaSurvey } from "../controller/surveyController.js";
let router = express.Router()

router.get("/", (req, res) => {
    res.status(200).send("Survey route reached")
})

router.post("/form", postCoronoSurvey )
router.get("/all", getallCoronaSuvey)
router.get("/:id", getCoronaSurvey)


export default router 