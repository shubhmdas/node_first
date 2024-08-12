import Comment from '../models/Comment.js';

export const getTopComments = async (req, res) => {
	try {
		const comments = await Comment.find({
			movie_id: { $ne: null },
		})
			.limit(5)
			.populate({
				path: 'movie_id',
				select: 'title',
			});
		console.log(comments);
		res.status(200).json(comments);
	} catch (error) {
		console.log(error);
	}
};
