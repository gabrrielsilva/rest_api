export const errorHandler = (err, req, res, next) => {
  if (err.message === 'Post already exists') {
    return res.status(409).send(err.message);
  }
  if (err.message === 'Post not found') {
    return res.status(404).send(err.message);
  }
  res.status(500).send(err.message);
};
