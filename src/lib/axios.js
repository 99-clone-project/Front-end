import axios from "axios";
import { getCookie } from "../utils/cookie";

const instance = axios.create({
  // 제이슨 서버
  // baseURL: "http://localhost:4000",

<<<<<<< HEAD
  // 합본
  //지은님 서버
  // baseURL: "http://13.209.98.45/",

  //재환님 서버
=======
  // 재환님 서버
>>>>>>> fddf7e144624d9b49104c41f77765e0b000c00f8
  baseURL: "http://jhhong0930.shop/",

  // 지은님 서버
  // baseURL: "http://13.209.98.45/",

  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json",
    Authorization: `${getCookie("user")}`,
    // Authorization: `Bearer ${localStorage.getItem("token")}`
  },
  withCredentials: true,
});

export default instance;
