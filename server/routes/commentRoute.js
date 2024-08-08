import express from 'express';
import { getTopComments } from '../controllers/commentController.js';

const router = express.Router();

router.get('/top', getTopComments);
export default router;
