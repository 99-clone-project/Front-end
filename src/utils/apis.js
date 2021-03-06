import instance from "../lib/axios";

export const apis = {
  // 회원가입 요청
  signUp: (user) => instance.post("/user/signup", user),
  login: (params) => instance.post("/user/login", params),

  // post는 /posts라는 주소에다가 post라는 이름으로 그 안에 담긴 값을 준다.
  addPostAX: (posts) => instance.post("/posts", posts),
  getPostAX: () => instance.get("/"),
  // getPostDetailAX: (currentpostId) => instance.get("/posts/${currentpostId}"),
  deletePostAX: (postId) => instance.delete(`/posts/${postId}`),

  addComment: (comment) => instance.post("/comments", comment),
  getComment: (postId) => instance.get(`/comments/${postId}`),
  removeComments: (commentId) => instance.delete(`/comments/${commentId}`),
  editComment: (commentId) => instance.put(`/comments/${commentId}`),

  plusLikes: (post) => instance.post(`/posts/{postsId}/like`),
};
