import mongoose from "mongoose";

const mentorSchema = new mongoose.Schema(
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
      default: "",
    },
    lastname: {
      type: String,
      required: true,
      default: "",
    },
    phone: {
      type: String,
      required: true,
      default: "",
    },
    organization: {
      type: String,
      required: true,
      default: "",
    },
    course: {
      type: String,
      required: true,
      default: "",
    },
    course_specialization: {
      type: String,
      required: true,
      default: "",
    },
    year_of_study: {
      type: String,
      required: true,
      default: "",
    },
    graduation_year: {
      type: String,
      required: true,
      default: "",
    },
    summary: {
      type: String,
      required: true,
      default: "",
    },
    skills: {
      type: String,
      enum: {
        values: ["java", "javascript", "html", "css"],
        message: `{VALUE} is not supported`,
      },
    },

    role: {
      type: Number,
      default: 1,
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

export default mongoose.model("mentors", mentorSchema);
