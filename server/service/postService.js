import postData from '../data/postsData.js';

export default class PostService {
  getPosts() {
    return postData.prototype.getPosts();
  }

  async getPost(id) {
    const post = await postData.prototype.getPost(id);
    if (!post) throw new Error('Post not found');
    return post;
  }

  async savePost(post) {
    const existingPost = await postData.prototype.getPostByTitle(post.title);
    if (existingPost) throw new Error('Post already exists');
    return postData.prototype.savePost(post);
  }

  async updatePost(id, post) {
    await this.getPost(id);
    return postData.prototype.updatePost(id, post);
  }

  deletePost(id) {
    return postData.prototype.deletePost(id);
  }
}
