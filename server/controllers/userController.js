const Users = require("../Models/user.model");
const bcrypt = require("bcryptjs"); 

// module.exports.login = async (req, res, next) => {
//   try {
//     const userId = req.params.id;

//     const { username, email, Verified } = req.body;
//     const user = await Users.findOne({ username });
//     if (!user)
//       return res.json({ msg: "Incorrect Username or Password", status: false });
//     const isVerified = await Users.findByIdAndUpdate(
//       userId,
//       {
//         Verified: true,
//         // avatarImage,
//       },
//       { new: true }
//     );

//     // const isPasswordValid = await bcrypt.compare(password, user.password);
//     // if (!isPasswordValid)
//     //   return res.json({ msg: "Incorrect Username or Password", status: false });
//     // delete user.password;
//     return res.json({
//       // isSet: isVerified.Verified,
//       // image: userData.avatarImage,
//     });
//   } catch (ex) {
//     next(ex);
//   }
// };

module.exports.register = async (req, res, next) => {
  try {
    
     const { name, email, phoneNumber } = req.body;
    await Users.updateOne({email : email} , {
      isRegistered : true
      
    })

   
    // const usernameCheck = await Users.findOne({ name });
    // if (usernameCheck)
    //   return res.json({ msg: "Username already used", status: false });
    const emailCheck = await Users.findOne({ email });
    if (emailCheck)
      return res.json({ msg: "Email already used", status: false });
    // const hashedPassword = await bcrypt.hash(password, 10);
    // const user = await Users.create({
    //   name,
    //   email,
    //   phoneNumber,

    //   // password: hashedPassword,
    // });
    // delete user.password;
    return res.json({ status: true, user });
  } catch (ex) {
    next(ex);
  }
};

module.exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await Users.find({ _id: { $ne: req.params.id } }).select([
      "email",
      "name",
      // "avatarImage",
      "_id",
    ]);
    return res.json(users);
  } catch (ex) {
    next(ex);
  }
};

module.exports.setAvatar = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const avatarImage = req.body.image;
    const userData = await Users.findByIdAndUpdate(
      userId,
      {
        isAvatarImageSet: true,
        Verified: true,
        avatarImage,
      },
      { new: true }
    );
    return res.json({
      isSet: userData.isAvatarImageSet,
      image: userData.avatarImage,
    });
  } catch (ex) {
    next(ex);
  }
};

module.exports.logOut = (req, res, next) => {
  try {
    if (!req.params.id) return res.json({ msg: "User id is required " });
    onlineUsers.delete(req.params.id);
    return res.status(200).send();
  } catch (ex) {
    next(ex);
  }
};
