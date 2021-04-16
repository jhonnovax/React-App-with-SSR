import express from 'express';
import getAllPosts from './posts/get-all';
import getById from './posts/get-by-id';
const router = express.Router();

router.get('/api/posts', getAllPosts);
router.get('/api/posts/:postId', getById);

export default router;