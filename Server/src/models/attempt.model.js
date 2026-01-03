const mongoose = require("mongoose");

const responseSchema = new mongoose.Schema(
  {
    quesionId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Question",
      required: true,
    },
    userAnswer: {
      type: String,
      required: true,
    },
    timeSpent: {
      type: Number,
      required: true, // seconds
    },
    index: {
      type: Number, // order of the question in test
      required: true,
    },
  },
  { _id: false }
);

const attemptsSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  testType: { type: String, enum: ["DS", "Algorithm"], required: true },
  responses: {[responseSchema],required: true },
  timeTaken: { type: Number, required: true }, // in seconds
  createdAt: { type: Date, default: Date.now },
});

const Attempt = mongoose.model("Attempt", attemptsSchema);
module.exports = Attempt;
