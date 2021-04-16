import allPosts from '../../database/posts.json';

export default (req, res) => {
  const { postId } = req.params;
  const postData = allPosts.find(post => post.id === postId);

  if (!postData) {
    res.status(400).json({ message: 'Post not found' });
    return;
  }

  res.json(postData);
};