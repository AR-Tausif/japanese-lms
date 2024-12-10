import { model, Schema } from "mongoose";

import config from "../../config";
import bcrypt from "bcrypt";
import { TUser, USER_ROLE, USER_ROLE_ENUM } from "./users.interface";


const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, select: false, required: true },
  role: { type: String, enum: [USER_ROLE_ENUM.ADMIN, USER_ROLE_ENUM.USER], default: USER_ROLE_ENUM.USER },
  photo: { type: String },
},
{
  timestamps: true,
  versionKey: false,
});

// Hash the password before saving the user model
userSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(
    this.password,
    Number(config.bcrypt_salt_rounds)
  );
  next();
});

const userModel = model<TUser>("User", userSchema);
export default userModel;
