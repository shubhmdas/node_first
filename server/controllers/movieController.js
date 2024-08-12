import Movie from '../models/Movie.js';

export const getTrendingMovies = async (req, res) => {
	try {
		// Fetch all movies from database
		const movies = await Movie.find()
			.sort({ num_mflix_comments: -1 })
			.limit(10)
			.exec();
		res.status(200).json(movies);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

export const getMovieById = async (req, res) => {
	try {
		const movie = await Movie.findById(req.params.id).select('title'); // Fetch movies by ID
		if (!movie) {
			return res.status(404).json({ error: 'Movie not found!' });
		}
		res.status(200).json(movie);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

export const createMovie = async (req, res) => {
	try {
		data = req.body;
		const name = data.name;
		const quantity = data.quantity;
		const price = data.price;

		// const newMovie = new Movie({ name, quantity, price });
		// await newMovie.save();

		res.status(201).json({ message: 'Product created!' });
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};
