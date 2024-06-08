import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowecase: true,
      trim: true,
    },
    fullName: {
      type: String,
      trim: true,
      index: true,
      default: "user",
    },
    phoneNumber: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    cartItems: Array,
    orders: Array,
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model("User", userSchema);
