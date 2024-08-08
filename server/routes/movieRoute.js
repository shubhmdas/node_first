import express from 'express';
import { getTrendingMovies, getMovieById, createMovie } from '../controllers/movieController.js';

const router = express.Router();

// Retrieve trending movies
router.get('/trending', getTrendingMovies);

// GET /api/movies/:id - Retrieve a movie by ID
router.get('/:id', getMovieById);

// POST /api/movies/create - Create a new movies
router.post('/create', createMovie);

export default router;
