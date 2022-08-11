const express = require("express");
const app = express();
const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
require("dotenv").config();

const mongoose = require("mongoose");
const { Schema } = mongoose;
mongoose.connect("mongodb://localhost:27017/JobData");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const dataSchema = new Schema({
  listName: String,
  cardsList: [
    {
      role: String,
      companyName: String,
    },
  ],
});
const jobList = mongoose.model("JobList", dataSchema);

let jobList1 = new jobList({
  listName: "Wishlist",
  cardsList: [
    {
      role: "SDE 1",
      companyName: "Google",
    },
    {
      role: "SDE 2",
      companyName: "Google",
    },
    {
      role: "SDE 3",
      companyName: "Google",
    },
    {
      role: "SDE 4",
      companyName: "Google",
    },
  ],
});
// jobList1.save();
app.get("/", function (req, res) {
  jobList.find(function (err, job) {
    if (err) console.log(err);
    else {
      // console.log(job);
      // res.send("it worked");
      res.json(job);
    }
  });
});
// //only update a particular list
// app.post("/:id", function (req, res) {
//   let id = req.params.id;
//   console.log(id);

//   // jobList.findById(id, function (err, job) {
//   //   console.log(job);
//   //   res.send("working");
//   // });
//   console.log(req.body);
//   jobList.findByIdAndUpdate(id, req.body, { new: true }, function (err, job) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(job);
//     }
//   });
//   res.send("it works");
// });

//adding new list
app.post("/", function (req, res) {
  try {
    const job = new jobList(req.body).save();
    console.log(job);
    res.send("new job added");
  } catch (err) {
    res.send("error");
  }
});

//deleting a new list
app.put("/:id", function (req, res) {
  let id = req.params.id;
  jobList.findByIdAndDelete(id, function (err, job) {
    if (err) {
      console.log(err);
    } else {
      console.log(job);
    }
  });
  res.send("it works");
});

//add a cardsList
// app.post("/:id", function (req, res) {
//   let id = req.params.id;
//   console.log(req.body);
//   jobList;
//   jobList.findByIdAndUpdate(
//     id,
//     { $push: { cardsList: req.body } },
//     function (err, job) {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log(job);
//       }
//     }
//   );
//   res.send("it works");
// });

//Delete a Cards
app.delete("/:id/:_id", function (req, res) {
  let id = req.params.id;
  let _id = req.params._id;
  console.log(req.body);
  jobList.findByIdAndUpdate(
    id,
    { $pull: { cardsList: { _id: _id } } },
    { new: true },
    function (err, job) {
      if (err) {
        console.log(err);
      } else {
        console.log(job);
      }
    }
  );
  res.send("it works");
});

//updating a listname
app.post("/:id", function (req, res) {
  let id = req.params.id;
  console.log(id);

  // console.log(req.body);
  jobList.findByIdAndUpdate(
    id,
    { $set: { listName: req.body.listName } },
    { new: true },
    function (err, job) {
      if (err) {
        console.log(err);
      } else {
        console.log(job);
      }
    }
  );
  res.send("it works");
});

//updating a card
// app.post("/:id/:_id", function (req, res) {
//   let id = req.params.id;
//   let _id = req.params._id;
//   console.log(req.body);
//   jobList.findByIdAndUpdate(
//     id,
//     {
//       $elemMatch: _id,
//       $set: {
//         role: req.body.cardsList.role,
//         companyName: req.body.cardsList.companyName,
//       },
//     },
//     { new: true },
//     function (err, job) {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log(job);
//       }
//     }
//   );
//   res.send("it works");
// });
/////////////////////////////////////////////////////////
// app.post("/:id/:_id", function (req, res) {
//   let id = req.params.id;
//   let _id = req.params._id;
//   jobList.findOneAndUpdate(
//     { _id: id, "joblists.id": _id },
//     {
//       $set: {
//         "joblists.$.role": req.body.role,
//         "joblists.$.companyName": req.body.companyName,
//       },
//     },
//     function (err, job) {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log(job);
//       }
//     }
//   );
//   res.send("it works");
// });
const PORT = 3001;
app.listen(PORT, () => console.log(`Server listening at port ${PORT}`));
