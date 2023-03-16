import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: [true, "title is required"],
    },
    description: {
      type: String,
      require: [true, "description is required"],
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "users",
      require: [true, "description is required"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("blogs", blogSchema);
