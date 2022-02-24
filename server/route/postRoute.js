import { Router } from 'express';
export const router = new Router();

import postService from '../service/postService.js';

router.get('/posts', async (req, res, next) => {
  try {
    const posts = await postService.prototype.getPosts();
    return res.json(posts);
  } catch (e) {
    next(e); // -> error handler middleware
  }
});

router.post('/posts', async (req, res, next) => {
  const post = req.body;
  try {
    const newPost = await postService.prototype.savePost(post);
    res.status(201).json(newPost);
  } catch (e) {
    next(e);
  }
});

router.put('/posts/:id', async (req, res, next) => {
  const post = req.body;
  try {
    await postService.prototype.updatePost(req.params.id, post);
    res.status(204).end();
  } catch (e) {
    next(e);
  }
});

router.delete('/posts/:id', async (req, res, next) => {
  try {
    await postService.prototype.deletePost(req.params.id);
    res.status(204).end();
  } catch (e) {
    next(e);
  }
});
