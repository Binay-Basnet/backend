import User from "../models/UserTable.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const token_key = "nitesh";

export default async function signin(req, res) {
  const { email, password } = req.body;

  console.log("LOG IN ROUTE REACHED")

  try {
    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: "User credentials didnot match" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: "User credentials didnot match" });
    }

    const token = jwt.sign({ userId: user._id, email: user.email }, token_key, {
      expiresIn: "24h",
    });
    console.log("LAST REACHED")
    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

// check if email exists
//   console.log("email - ", req.body.email);
//   try{

//       const user = await User.findOne({ email: req.body.email });
//       if (!user) res.status(400).json({ message: "email doesn't exist ok" });
//       //   check if password matches
//       else {
//         try{

//             const validPassword = await bcrypt.compare(
//                 req.body.password,
//                 user.password
//                 );

//                 if (!validPassword){
//                     res.status(400).json({ message: "password didn't match ok" });
//                 }
//                 else {
//                 // if all goes well upto now , create a json web token
//                     const token = jwt.sign({ _id: user._id, email: user.email }, token_key);
//                     console.log("TOKEN : ", token)
//                     res.status(200).json({ email: user.email, token });
//             }
//             res.status(200).json({email: user.email, token})
//         }catch(err){
//             console.log({err})
//             res.send("Error Occured")
//         }
//         }
//     }catch(err){
//         console.log(err)
//         res.status(400).send("Could not login")
//     }
// }
