const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// DB connection
const connectDB = require('./conn');

app.use(express.json());
app.use(cors());

const tripRoutes = require('./routes/trip.routes');
app.use('/trip', tripRoutes);

app.get('/hello', (req, res) => {
  res.send('Hello World!');
});

// Start server only after DB connects
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
  });
}).catch(err => {
  console.error("DB connection failed:", err);
});