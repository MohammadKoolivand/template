import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../../models/user.js';

export const GetSite = (req, res) => {
  try {
    return res.status(200).json({ message: 'Simple Get' });
  } catch (error) {
    return res.status(500).json({ message: 'Simple Error', error: error });
  }
};

export const SignUp = async (req, res) => {
  // const { serverErrorMessage, SuccessSave } = req.locale;
  try {
    // get request body
    const { firstName, lastName, email, password, profileUrl } = req.body;

    // check user exist
    const userExisted = await User.findOne({ email });
    if (userExisted) {
      return res.status(400).json({ message: "user existsfdgdfg" });
    }

    // hash password
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    // save user
    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hash,
      profileUrl
    });

    const savedUser = await newUser.save();

    // create token
    const token = jwt.sign(
      { userID: savedUser._id, date: new Date() },
      process.env.JWT_SECRET_KEY
    );
    savedUser.tokens = [...savedUser.tokens, token];
    console.log('savedUser.tokens', savedUser)

    await savedUser.save();

    return res.status(200).json({ token: token, message: 'SuccessSave' });
  } catch (e) {
    return res.status(500).json({ message: e });
  }
}
