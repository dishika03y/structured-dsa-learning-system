const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema(
  {
    questionText: { type: String, required: true },
    correctAnswer: { type: String, required: true },
    category: {
      type: String,
      enum: ["DS", "Algorithm"],
      required: true,
    },
    Topic: {
      type: String,
      required: true,
    },
    difficulty: {
      type: String,
      enum: ["Easy", "Medium", "Hard"],
      required: true,
    },
    questionType: {
      type: String,
      enum: ["MCQ", "Coding", "Theory"],
      required: true,
    },
    patterns: [
      {
        type: String,
        required: true,
      },
    ],
    variationLevel: {
      type: String,
      enum: ["basic", "intermediate", "advanced"],
      required: true,
    },
    expectedTime: {
      type: Number, // in seconds
      required: true,
    },
    marks: {
      type: Number,
      default: 1,
    },
  },
  { timestamps: true }
);
const Question = mongoose.model("Question", questionSchema);

module.exports = Question;
