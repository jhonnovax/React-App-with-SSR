import allPosts from '../../database/posts.json';

export default (req, res) => {
  res.json(allPosts);
};