const express = require("express");
const {
  register,

  getAllUsers,

  setAvatar,

  logOut,
} = require("../controllers/userController");
const multer = require("multer");

const { v4: uuidv4 } = require("uuid");

const path = require("path");

const mongoose = require("mongoose");

let Users = require("../Models/user.model");

let Posts = require("../Models/post.model");

const DIR = "./public/";

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname.toLowerCase().split(" ").join("-");
    cb(null, uuidv4() + "-" + fileName);
  },
});

var upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
    }
  },
});

// send a request
const sendRequest = async (req, res) => {
  const UserId = req.params.id;
  const fid = req.params.fid;
  var name2;
  var name1;
  await Users.findOne({ _id: fid })
    .then((docs) => {
      name2 = docs.name;
    })
    .catch((err) => {
      console.log(err);
    });

  const friendId = {
    name: name2,
    userId: req.params.fid,
  };

  await Users.updateOne({ _id: UserId }, { $push: { friendList: friendId } });

  Users.findOne({ _id: UserId })
    .then((docs) => {
      console.log(docs);
      // res.json({message : "updated"})
    })
    .catch((err) => {
      console.log(err);
    });
};

// accept a request
const updateRequest = async (req, res) => {
  //  console.log(req.params)

  const UserId = req.params.id;
  const fid = req.params.fid;
  var name2;
  var name1;
  var profle2;
  var profile1;

  await Users.findOne({ _id: fid })
    .then((docs) => {
      (name2 = docs.name), (profle2 = docs.profile);
    })
    .catch((err) => {
      console.log(err);
    });

  await Users.findOne({ _id: UserId })
    .then((docs) => {
      (name1 = docs.name), (profile1 = docs.profile);
    })
    .catch((err) => {
      console.log(err);
    });

  const friendId = {
    name2: name2,
    profle2: profle2,
    userId: req.params.fid,
  };

  const data = {
    name1: name1,
    profile1: profile1,
    userId: req.params.id,
  };

  await Users.updateOne(
    { _id: UserId },
    { $pull: { friendList: { userId: fid } } }
  );

  await Users.updateOne({ _id: UserId }, { $push: { AcceptedReq: friendId } });

  await Users.updateOne({ _id: fid }, { $push: { AcceptedReq: data } });

  Users.findOne({ _id: UserId })
    .then((docs) => {
      console.log(docs);
    })
    .catch((err) => {
      console.log(err);
    });
};

//delete a request
const DeleteRequest = async (req, res) => {
  const UserId = req.params.id;
  const fid = req.params.fid;
  var name2;
  var name1;

  await Users.findOne({ _id: fid })
    .then((docs) => {
      name2 = docs.name;
    })
    .catch((err) => {
      console.log(err);
    });

  await Users.findOne({ _id: UserId })
    .then((docs) => {
      name1 = docs.name;
    })
    .catch((err) => {
      console.log(err);
    });

  const friendId = {
    name: name2,
    userId: req.params.fid,
  };

  const data = {
    name: name1,
    userId: req.params.id,
  };

  await Users.updateOne(
    { _id: UserId },
    { $pull: { friendList: { userId: fid } } }
  );

  await Users.updateOne(
    { _id: UserId },
    { $pull: { AcceptedReq: { userId: fid } } }
  );

  await Users.updateOne(
    { _id: fid },
    { $pull: { AcceptedReq: { userId: UserId } } }
  );

  await Users.findOne({ _id: fid })
    .then((docs) => {
      console.log(docs);
    })
    .catch((err) => {
      console.log(err);
    });

  await Users.findOne({ _id: UserId })
    .then((docs) => {
      console.log(docs);
    })
    .catch((err) => {
      console.log(err);
    });
};

const getAll = async (req, res) => {
  const userId = req.params.id;
  console.log(userId);
  Users.findOne({ _id: userId })
    .then((docs) => {
      res.json(docs);
      console.log(docs);
    })
    .catch((err) => {
      console.log(err);
    });
};

const getFreind = async (req, res, next) => {
  var id = req.params.id;
  var fid = req.params.fid;

  await Users.findOne({ _id: id }).then((docs) => {
    res.json(docs);
  });
};

const All = async (req, res, next) => {
  console.log("hiiii");
  Users.find().then((docs) => {
    res.json(docs);
    console.log(docs);
  });
};

const saveUser = async (req, res) => {
  console.log(req.body);

  var n = 10;
  var num = req.body.mobile_no;
  num = num.toString();
  var cnum = num.substring(num.length - n);
  var rnum = cnum * 1;
  const url = req.protocol + "://" + req.get("host");

  const newpost = new Users({
    name: req.body.Name,
    email: req.body.Email,
    mobile: rnum,
    profile: url + "/public/" + req.file.filename,
  });

  

  await Users.find({ email: req.body.Email }).then(async (docs) => {
    if (docs.data == undefined) {
        console.log(docs.length == 0)
      await Users.find({ mobile: rnum }).then(async (rdocs) => {
        if (rdocs.length == 0) {
          newpost
            .save()
            .then((doc) => {
                res.json(doc)
              console.log(doc);
            })
            .catch((err) => {
              console.log(err);
            });
            //  update message schema
        } else {
          await Users.updateOne(
            { mobile: rnum },
            {
              name: req.body.Name,
              email: req.body.Email,
              mobile: rnum,
              profile: url + "/public/" + req.file.filename,
            }
          ).then((D) => {
              res.json(D.data)
          });
        }
      });
    } else {
      await Users.updateOne(
        { email: req.body.email },
        {
          name: req.body.Name,
          email: req.body.Email,
          mobile: rnum,
          profile: url + "/public/" + req.file.filename,
        }.then((r) => {
            res.json(r)
        })
      );
    }
  });

  console.log("heeeeeeeeeee");
};

const fetchUser = async(req, res) => {
  function containsOnlyNumbers(str) {
    return /^\d+$/.test(str);
  }

  const v = req.params.data;
  const check = containsOnlyNumbers(v);
  if (check || v.charAt(0) == "+") {
    const num = v.substring(v.length - 10);
    const rnum = num * 1;
    Users.findOne({ mobile: rnum })
      .then(async(docs) => {
        await Users.updateOne({mobile : rnum} , {
          isRegistered : true
        })
        res.json(docs);
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    Users.findOne({ email: v })
      .then(async(docs) => {
        //  res.json(docs)
        if (docs == null) {
          res.json(docs);
        } else {
          await Users.updateOne({email : v} , {
          isRegistered : true
        })
          res.json(docs);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

const switchU = async(res , req , next) => {

  const id = req.params.id

  await Users.updateOne({_id : id} , {
    isRegistered : true
  })

}

router.post("/sendRequest/:id/:fid", sendRequest);

router.post("/acceptRequest/:id/:fid", updateRequest);

router.post("/deleteRequest/:id/:fid", DeleteRequest);

router.get("/fetchUserid/:id", getAll);

router.get("/isfriend/:id/:fid", getFreind);

router.get("/all", All);

router.get("/fetchUser/:data", fetchUser);

router.post("/saveUser", upload.single('photo'), saveUser);
router.post("/register", register);
  
router.get("/allusers/:id", getAllUsers);

router.post("/switchRegister/:id" , switchU)

module.exports = router;
