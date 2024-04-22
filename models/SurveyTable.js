import mongoose from "mongoose";

const coronaSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
    name: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  documentId: {
    type: String,
    // required: true,
  },
  firstDoze: {
    type: Boolean,
    // required: true,
  },
  secondDoze: {
    type: Boolean,
    // required: true,
  },
  thirdDoze: {
    type: Boolean,
  },
  createdAt: {
    type: Date,
    default: () => Date.now(),
  },
});



const CoronaModel = mongoose.model("CoronaModel", coronaSchema);
export default CoronaModel;