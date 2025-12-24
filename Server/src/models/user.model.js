const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, unique: true, required: true, lowercase: true },
    phone: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true },
    year: Number,
    branch: String,
    goal: String,
    preference: String,

    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },

    // test references
    dsTestId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "DsTest",
    },
    algoTestId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "AlgoTest",
    },

    // scores
    dsOverallScore: {
      type: Number,
      default: 0,
    },
    algoOverallScore: {
      type: Number,
      default: 0,
    },

    // roadmap references
    dsRoadmapId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "DsRoadmap",
    },
    algoRoadmapId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "AlgoRoadmap",
    },

    // revision sheets
    revisionSheetId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "RevisionSheet",
    },

    // progress tracking
    totalQuestionsCompleted: {
      type: Number,
      default: 0,
    },
    progress: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
