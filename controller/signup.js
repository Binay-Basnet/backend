import User from "../models/UserTable.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export default async function signup(req, res) {

    const user = await User.findOne({ email: req.body.email });
  if (user) res.status(400).json({ message: "user already exists" });
  else {

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    console.log({ hashedPassword });

    const newuser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    try {
      const saveUser = await newuser.save();
      const token = jwt.sign(
        { _id: saveUser._id, email: saveUser.email },
        "nitesh"
      );
      console.log({ token });
      res.status(200).json({ email: saveUser.email, token });
    } catch (err) {
      console.log(err.message);
    }
  }
}