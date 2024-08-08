import mongoose from 'mongoose';

const imdbSchema = mongoose.Schema({
	rating: Number,
	votes: Number,
	id: Number,
});
const viewerCriticSchema = mongoose.Schema({
	rating: Number,
	numReviews: Number,
	meter: Number,
});
const tomatoesSchema = mongoose.Schema({
	viewer: viewerCriticSchema,
	fresh: Number,
	critic: viewerCriticSchema,
	rotten: Number,
	lastUpdated: Date,
});
const MovieSchema = mongoose.Schema(
	{
		title: { type: String, required: true, minlength: 1, maxlength: 150 },
		runtime: { type: Number, required: true, min: 1 },
		type: { type: String, required: true },
		genres: { type: [String], required: true },
		released: { type: Date, required: true },
		cast: { type: [String], required: true },
		plot: { type: String, required: true, minlength: 3, maxlength: 350 },
		fullplot: { type: String, required: false },
		languages: { type: [String], required: true },
		directors: { type: [String], required: false },
		writers: { type: [String], required: false },
		imdb: { type: imdbSchema, required: false },
		tomatoes: { type: tomatoesSchema, required: false },
		num_mflix_comments: { type: Number, required: false },
	},
	{ timestamps: true }
);

const Movie = mongoose.model('Movie', MovieSchema);
export default Movie;
