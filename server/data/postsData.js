import { db } from '../infra/database.js';

export default class PostData {
  getPosts() {
    return db.query('SELECT * FROM blog.post');
  }

  getPost(id) {
    return db.oneOrNone('SELECT * FROM blog.post WHERE id = $1', [id]);
  }

  getPostByTitle(title) {
    return db.oneOrNone('SELECT * FROM blog.post WHERE title = $1', [title]);
  }

  savePost(post) {
    return db.one(
      'INSERT INTO blog.post (title, content) VALUES ($1, $2) returning *',
      [post.title, post.content]
    );
  }

  updatePost(id, post) {
    return db.none(
      'UPDATE blog.post SET title = $1, content = $2 where id = $3',
      [post.title, post.content, id]
    );
  }

  deletePost(id) {
    return db.none('DELETE FROM blog.post WHERE id = $1', [id]);
  }
}
