const AttendanceData = require("../database/models/attendancedata.model");

const createAttendanceData = async (req, res) => {
  try {
    const { userId, sessionId, status } = req.body;

    // Validasi input
    if (!userId || !sessionId || !status) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Simpan ke database
    const newAttendanceData = new AttendanceData({ userId, sessionId, status });
    await newAttendanceData.save();

    res.status(201).json({ message: "Attendance data saved successfully", data: newAttendanceData });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = {
  createAttendanceData,
};
