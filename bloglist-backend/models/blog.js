const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    url: {
      type: String,
    },
    likes: {
      type: Number,
      default: 0,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    comments: [
      {
        type: String,
      },
    ],
  },
  { strict: true }
);

blogSchema.pre("findOneAndUpdate", function (next) {
  this.options.runValidators = true;
  next();
});

blogSchema.set("strictQuery", true);

blogSchema.set("toJSON", {
  transform: (document, recievedObject) => {
    recievedObject.id = recievedObject._id;
    delete recievedObject.__v;
    delete recievedObject._id;
  },
});

module.exports = mongoose.model("Blog", blogSchema);
