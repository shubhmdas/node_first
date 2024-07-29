const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// // Create a URL for home page
// router.get('/', (req, res) => {
// 	res.send('This is the home page!');
// });

// GET /api/products - Retrieve all products
router.get('/products', async (req, res) => {
	try {
		const products = await Product.find(); // Fetch all products from database
		res.status(200).json(products);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});

// GET /api/products/:id - Retrieve a product by ID
router.get('/products/:id', async (req, res) => {
	try {
		const product = await Product.findById((id = req.params.id)); // Fetch product by ID
		if (!product) {
			return res.status(404).json({ error: 'Product not found!' });
		}
		res.status(200).json(product);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});

// POST /api/products/create - Create a new product
router.post('/products/create', async (req, res) => {
	try {
		data = req.body;
		const name = data.name;
		const quantity = data.quantity;
		const price = data.price;

		const newProduct = new Product({ name, quantity, price });
		await newProduct.save();

		res.status(201).json({ message: 'Product created!' });
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});

module.exports = router;
