import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    answer: {
      type: String,
      required: true,
    },
    firstname: {
      type: String,
      required: true,
      default: " ",
    },
    lastname: {
      type: String,
      required: true,
      default: " ",
    },
    photo: {
      data: Buffer,
      contentType: String,
    },
    phone: {
      type: String,
      required: true,
      default: " ",
    },
    course: {
      type: String,
      required: true,
      default: " ",
    },
    course_specialization: {
      type: String,
      required: true,
      default: " ",
    },
    year_of_study: {
      type: String,
      required: true,
      default: " ",
    },
    graduation_year: {
      type: String,
      required: true,
      default: " ",
    },
    summary: {
      type: String,
      required: true,
      default: " ",
    },
    company: {
      type: String,
      required: true,
      default: " ",
    },
    projects: {
      type: String,
      required: true,
      default: " ",
    },
    access: {
      type: Number,
      default: 0,
    },
    blogs: [
      {
        type: mongoose.Types.ObjectId,
        ref: "blogs",
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("users", userSchema);
