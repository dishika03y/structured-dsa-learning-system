const mongoose = require("mongoose");

const diagnosticSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  createdAt: { type: Date, default: Date.now },
  testType: { type: String, required: true },
  attempts: {
    type: mongoose.Schema.Types.Array,
    ref: "Attempt",
    required: true,
  },
  summary: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Summary",
    required: true,
  },
});
const Diagnostic = mongoose.model("Diagnostic", diagnosticSchema);

module.exports = Diagnostic;
