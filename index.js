import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose"
import surveyRoutes from "./routes/surveyRoute.js"
import userRoutes from "./routes/userRoute.js"

const app = express();

dotenv.config();
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));

// app.use(bodyParser.json({ limit: "30mb", extended: true }));
// app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log("Server running on port : ", PORT);
});

console.log(process.env.DB_CONNECT);

mongoose.connect(
  process.env.DB_CONNECT,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
//   () => {
//     console.log("connected to db");
//   }
);

app.get("/", (req, res) => {
  const routes = ["GET /", "GET /api/students", "GET /user:id"];
  res.status(200).json({ routes: routes });
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.use("/survey", surveyRoutes)
app.use("/user", userRoutes)
// http://localhost:3000/%22http://localhost:5000/%22;survey/all
