import mongoose, { mongo } from 'mongoose';

const commentSchema = mongoose.Schema({
	name: { type: String, required: true },
	email: { type: String, required: true },
	movie_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Movie',
		required: true,
	},
	text: { type: String, required: true },
	date: { type: Date, required: true },
});

const Comment = mongoose.model('Comment', commentSchema);
export default Comment;
