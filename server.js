// Load environment variables from .env
require('dotenv').config();

// Import dependencies
const express = require('express');
const mongoose = require('mongoose');

// Create Express app
const app = express();
const PORT = process.env.PORT || 8080;

// Middleware to parse JSON requests
app.use(express.json());

// MongoDB connection URI from .env
const mongoURI = process.env.MONGO_URI || "mongodb://localhost:27017/test";

if (!process.env.MONGO_URI) {
  console.warn("⚠️ Warning: MONGO_URI not found in environment. Using fallback.");
}
// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ Connected to MongoDB"))
.catch((err) => console.error("❌ MongoDB connection error:", err));


// Import expense routes
const expenseRoutes = require('./routes/expenses');
app.use('/api/expenses', expenseRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('🚀 Expense Tracker API is Running!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`🌐 Server is running on http://localhost:${PORT}`);
});
