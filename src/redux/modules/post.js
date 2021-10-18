import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";

// actions type

const ADD_POST = "ADD_POST";

// action creators
// 포스트를 넘겨준다 ?
const addPost = createAction(ADD_POST, (post) => ({ post }));

// initialState
const initialState = {
  list: [
    {
      title: "제목1",
      content: "여기에 내용이 들어가야 합니다1",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzIiKMQJjundNhRhkqo-VwfcUKKIzWlulhpQ&usqp=CAU",
    },
    {
      title: "제목2",
      content: "여기에 내용이 들어가야 합니다2",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzIiKMQJjundNhRhkqo-VwfcUKKIzWlulhpQ&usqp=CAU",
    },
    {
      title: "제목3",
      content: "여기에 내용이 들어가야 합니다3",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzIiKMQJjundNhRhkqo-VwfcUKKIzWlulhpQ&usqp=CAU",
    },
  ],
  post: [],
};

const initialPost = {
  title: "제목3",
  content: "여기에 내용이 들어가야 합니다3",
  image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzIiKMQJjundNhRhkqo-VwfcUKKIzWlulhpQ&usqp=CAU",
  userId: "dawon0411",
};
// middleware
const addPostMiddleware = (post) => {
  return function (dispatch, getState, { history }) {
    axios
      .post(`/posts`, post)
      .then((res) => {
        history.push("/");
        console.log(res);
        // const post = res.data.newPost;
        console.log("addPost 액션 작동했다!");
        alert("글 작성이 완료되었습니다.");
        dispatch(addPost(post));
      })
      .catch((err) => {
        console.log(err);
        console.log("addPost 액션이 작동하지않았습니다!");
        alert("글 작성에 실패하였습니다.");
      });
  };
};

// reducer
export default handleActions(
  {
    [ADD_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list.unshift(action.payload.post);
      }),
  },
  initialState
);

const actionCreators = {
  addPost,
  addPostMiddleware,
};

export { actionCreators };
