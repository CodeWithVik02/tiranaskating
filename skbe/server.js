const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const LoginRoute = require('./routes/login-route');

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const corsOptions = {
  origin: function (origin, callback) {
    callback(null, true);
  },
};
corsOptions.credentials = true;
app.use(cors(corsOptions));

// MongoDB Connection
const mongoUri = 'mongodb+srv://emanueldervishi:BPGCtVy9WjLWP0ki@cluster0.x6iszpg.mongodb.net/';
mongoose.connect(
  mongoUri,
  {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log('Connected to MongoDB');
  }
);

// Serving static files


// View engine setup


// Routes
app.use('/api', LoginRoute);

// Server setup
const PORT = process.env.APP_PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
