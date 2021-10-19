import axios from "axios";
import { getCookie } from "../utils/cookie";

const instance = axios.create({
  baseURL: "http://jhhong0930.shop/",
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json",
    Authorization: `Bearer ${getCookie("user")}`,
    // Authorization: `Bearer ${localStorage.getItem("token")}`
  },
  withCredentials: true,
});

export default instance;
