import Comment from '../models/Comment.js';

export const getTopComments = async (req, res) => {
	try {
		const comments = await Comment.find().sort('-date').limit(10).exec();
		res.status(200).json(comments);
	} catch (error) {
		console.log(error);
	}
};
