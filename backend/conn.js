const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 5000
    });

    console.log("MongoDB connected:", conn.connection.host);
  } catch (err) {
    console.error("DB connection failed, retrying in 5 sec...");
    setTimeout(connectDB, 5000);
  }
};

// Log the MongoDB URI for debugging

console.log("Connecting to:", process.env.MONGO_URI);

mongoose.connection.on('connected', () => {
  console.log('Mongoose connected');
});

mongoose.connection.on('error', (err) => {
  console.error('Mongoose error:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});

module.exports = connectDB;