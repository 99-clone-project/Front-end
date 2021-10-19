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

// 질문1, getPostAX를 저는 /posts로 했는데 우리가 정한 api는 /입니다. 이거를 맞춰야하는거 아닌가요?

// 질문 2, 지금 각 카드를 누르면 각 포스트 상세페이지로 이동. 위에 고유 값 뜨게 만듬. 근데 디테일의 모양이 하나도 보이지 않음.
