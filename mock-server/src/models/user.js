import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const UserSchema = new Schema(
  {
    email: { type: String, maxLength: 100, unique: true, index: true },
    firstName: String,
    lastName: String,
    profileUrl: String,
    password: { type: String },
    role: { type: Number, default: 1 },
    friends: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    groups: [
      {
        groupId: { type: Schema.Types.ObjectId, ref: 'Group' },
        budget: { type: Number, default: 0 },
      },
    ],
    tokens: [String],
  },
  {
    timestamps: true,
  }
);

const User = model('User', UserSchema);
export default User;