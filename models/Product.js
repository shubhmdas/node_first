const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, 'Please enter product name'],
			index: true,
			minlength: [3, 'Product name must be at least 3 characters long'],
			maxlength: [
				180,
				'Product name must be at most 180 characters long',
			],
		},
		quantity: {
			type: Number,
			required: true,
			default: 0,
		},
		price: {
			type: Number,
			required: true,
			default: 0,
			min: [0, 'Price must be at least 0'],
		},
		status: {
			type: String,
			enum: ['active', 'inactive', 'discontinued'],
		},
		image: {
			type: String,
			required: false,
		},
	},
	{ timestamps: true }
);

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;
