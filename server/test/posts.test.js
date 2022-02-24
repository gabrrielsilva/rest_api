import axios from 'axios';
import postService from '../service/postService.js';
import { db } from '../infra/database.js';

import crypto from 'crypto';
const generate = () => {
  return crypto.randomBytes(10).toString('hex');
};

const request = (url, method, data) => {
  return axios({ url, method, data, validateStatus: false });
};

beforeAll(() => {
  db.none('DELETE FROM blog.post');
});

test('Should get posts', async function () {
  // atomic test: create entity, handle, and delete
  // given
  const post1 = await postService.prototype.savePost({
    title: generate(),
    content: generate(),
  });
  const post2 = await postService.prototype.savePost({
    title: generate(),
    content: generate(),
  });
  const post3 = await postService.prototype.savePost({
    title: generate(),
    content: generate(),
  });

  // when
  const response = await request('http://localhost:3001/posts', 'get');
  const posts = response.data;

  // then
  expect(response.status).toBe(200);
  expect(posts).toHaveLength(3);
  await postService.prototype.deletePost(post1.id);
  await postService.prototype.deletePost(post2.id);
  await postService.prototype.deletePost(post3.id);
});

test('Should save a post', async function () {
  const data = { title: generate(), content: generate() };
  const response = await request('http://localhost:3001/posts', 'post', data);
  expect(response.status).toBe(201);
  const post = response.data;
  expect(post.title).toBe(data.title);
  expect(post.content).toBe(data.content);
  await postService.prototype.deletePost(post.id);
});

test('Should not save a post', async function () {
  const data = { title: generate(), content: generate() };
  const response1 = await request('http://localhost:3001/posts', 'post', data);
  const response2 = await request('http://localhost:3001/posts', 'post', data);
  expect(response2.status).toBe(409);
  const post = response1.data;
  await postService.prototype.deletePost(post.id);
});

test('Should update a post', async function () {
  const post = await postService.prototype.savePost({
    title: generate(),
    content: generate(),
  });
  post.title = generate();
  post.content = generate();
  const response = await request(
    `http://localhost:3001/posts/${post.id}`,
    'put',
    post
  );
  expect(response.status).toBe(204);
  const updatedPost = await postService.prototype.getPost(post.id);
  expect(updatedPost.title).toBe(post.title);
  expect(updatedPost.content).toBe(post.content);
  await postService.prototype.deletePost(post.id);
});

test('Should not update a post', async function () {
  const post = {
    id: 1,
  };
  const response = await request(
    `http://localhost:3001/posts/${post.id}`,
    'put',
    post
  );
  expect(response.status).toBe(404);
});

test('Should delete a post', async function () {
  const post = await postService.prototype.savePost({
    title: generate(),
    content: generate(),
  });
  const response = await request(
    `http://localhost:3001/posts/${post.id}`,
    'delete'
  );
  expect(response.status).toBe(204);
  const posts = await postService.prototype.getPosts();
  expect(posts).toHaveLength(0);
});
