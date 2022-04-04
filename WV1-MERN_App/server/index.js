const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserModel = require("./models/Users");

const cors = require("cors");

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://nahedBen:manel@cluster0.nxa4c.mongodb.net/MernTut?retryWrites=true&w=majority",
  () => {
    console.log("Database connected ");
  }
);

// app.get("/getUsers", (req, res) => {
//   UserModel.find({}, (err, result) => {
//     if (err) {
//       res.json(err);
//     } else {
//       res.json(result);
//     }
//   });
// });

//

// app.get("/getUsers", (req, res) => {
//   UserModel.find({}, (err, result) => {
//     if (err) {
//       res.json(err);
//     } else {
//       res.json(result);
//     }
//   });
// });

// app.get("/getUsersNum", (req, res) => {
//   console.log("Preparing to send the list of user number");
//   UserModel.find({}, (err, result) => {
//     const data = { total: result.length };
//     // res.send(data.total);
//     res.json(result);
//   });
// });

// app.post("/createUser", async (req, res) => {
//   const user = req.body;
//   // to create a new user
//   const newUser = new UserModel(user);
//   // then add aeait
//   await newUser.save();
//   res.json(user);
// });

// app.post("/createUser", async (req, res) => {
//   const user = req.body;
//   // const newUser = new UserModel(user)
//   const newUser = new UserModel(user);
//   await newUser.save();
//   res.json(user);
// });

app.get("/getUsers", (req, res) => {
  UserModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      console.log("Request will be done now");
      res.json(result);
    }
  });
});

app.post("/createUser", async (req, res) => {
  const user = req.body;
  const newUser = new UserModel(user);
  await newUser.save();
  res.json(newUser);
});
app.listen(3001, () => {
  console.log("server is running");
});

console.log("HEllo");
