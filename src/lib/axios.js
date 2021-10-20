import axios from "axios";
import { getCookie } from "../utils/cookie";

const instance = axios.create({
  //제이슨 서버
  // baseURL: "http://localhost:4000",

  // 재환님 서버
  baseURL: "http://jhhong0930.shop/",
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json",
    Authorization: `${getCookie("user")}`,
    // Authorization: `Bearer ${localStorage.getItem("token")}`
  },
  withCredentials: true,
});

export default instance;
