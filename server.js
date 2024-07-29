const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config(); // To lead environment variables from .env file

// Initialize Express app
const app = express();

// Middleware
app.use(express.json());

// Connect with MongoDB database using Mongoose
const DB_URI = process.env.MONGODB_URI;
mongoose
	.connect(DB_URI)
	.then(() => {
		console.log('Connected to database!');
	})
	.catch((e) => {
		console.log('Could not connect to database!');
		console.log('Error: ', e);
	});

// Routes
const productRoutes = require('./routes/products');
app.use('/api', productRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log('Server is running on port 3000');
});
