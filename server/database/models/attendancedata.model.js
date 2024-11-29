const mongoose = require("mongoose");

const AttendanceDataSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  sessionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "AttendanceSession",
    required: true,
  },
  status: {
    type: String,
    enum: ["Hadir", "Mangkir"],
    required: true,
    default: "Mangkir",
  },
  timestamp: {
    type: Date,
    default: Date.now, // Default waktu absensi
  },
});

const AttendanceData = mongoose.model("AttendanceData", AttendanceDataSchema);
module.exports = AttendanceData;