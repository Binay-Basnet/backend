import CoronaModel from "../models/SurveyTable.js";
import { v4 as uuidv4 } from 'uuid';
import RandomId from "../utils.js"
import mongoose from "mongoose"

export const postCoronoSurvey = async (req, res) => {
    let newid = RandomId()
    console.log("req.body - ", req.body);
    const newCoronaDetail = new CoronaModel({
    id: newid,
    name: req.body.username,
    age: req.body.age,
    documentId: newid,
    firstDoze: req.body.firstDoze,
    secondDoze: req.body.secondDoze,
    thirdDoze: req.body.thirdDoze,
  });

  try {
    await newCoronaDetail.save();
    res.status(201).json(newCoronaDetail);
  } catch (err) {
    console.log(err);
    res.status(400).send("error ayo save garna vanda paila ");
  }
}

export const getCoronaSurvey = async (req, res) => {
    let {id} = req.params
    // let objid = new mongoose.Types.ObjectId(id) 
    try {
        const surveyRecord = await CoronaModel.findById(id)
        console.log({surveyRecord})
        console.log({id})
        res.status(200).json(surveyRecord)
    }catch(err) {
        console.log({err})
        res.json({message:"could not find"})
    }
}

export const getallCoronaSuvey = async (req, res) => {
  console.log("USER : ", req.user)
  try{
    const records = await CoronaModel.find()
    console.log({records})
    res.status(200).json(records)
  }catch(err){
    console.log(err)
    res.send("Error occurred while fetching data")
  }
}