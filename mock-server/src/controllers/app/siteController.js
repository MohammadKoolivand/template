import User from "../../models/user.js";

export const GetSite = (req, res) => {
  try {
    return res.status(200).json({ message: 'Simple Get' });
  } catch (error) {
    return res.status(500).json({ message: 'Simple Error', error: error });
  }
};

export const SignUp = (req, res) => {
  var { serverErrorMessage, SuccessSave } = req.locale;
  try {
    // get request body
    var { firstName, lastName, email, password, profileUrl } = req.body;

    // check user exist
    User.findOne({ email: email }, (err, userExisted) => {
      if (err) {
        return res.status(500).json({ message: err });
      }
      if (userExisted) {
        return res.status(400).json({ message: "user exists" });
      }

      // hash password
      bcrypt.hash(password, bcrypt.genSaltSync(10), (err, hash) => {
        if (err) {
          return res.status(500).json({ message: err });
        }

        // save user
        var newUser = new User({
          firstName,
          lastName,
          email,
          password: hash,
          profileUrl
        });
        newUser.save((err, savedUser) => {
          if (err) {
            return res.status(500).json({ message: err });
          }
          //create token
          const token = jwt.sign(
            { userID: savedUser._id, date: new Date() },
            process.env.JWT_SECRET_KEY
          );
          savedUser.tokens = [...savedUser.tokens, token];

          savedUser.save((err) => {
            if (err) {
              return res.status(500).json({ message: err });
            }
            return res.status(200).json({ token: token, message: SuccessSave });
          });
        });
      });
    });
  } catch (e) {
    return res.status(500).json({ message: e });
  }
};
