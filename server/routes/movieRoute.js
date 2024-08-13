import express from 'express';
import {
	getTrendingMovies,
	getTrendingSeries,
	getMovieById,
	createMovie,
} from '../controllers/movieController.js';

const router = express.Router();

// Retrieve trending movies
router.get('/trending', getTrendingMovies);

// Retrieve trending series
router.get('/series/trending', getTrendingSeries);

// GET /api/movies/:id - Retrieve a movie by ID
router.get('/:id', getMovieById);

// POST /api/movies/create - Create a new movies
router.post('/create', createMovie);

export default router;
