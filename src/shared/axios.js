import axios from "axios";

const instance = axios.create({
  //제이슨 서버
  baseURL: "http://localhost:4000",
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json",
    // authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export const apis = {
  // post는 /posts라는 주소에다가 post라는 이름으로 그 안에 담긴 값을 준다.
  addPostAX: (posts) => instance.post("/posts", posts),
  getPostAX: () => instance.get("/posts"),
};
