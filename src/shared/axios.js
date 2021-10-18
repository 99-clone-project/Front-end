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
  addPost: (post) => instance.post("/posts", post),
};
