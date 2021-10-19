import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
// import axios from "axios";
import { apis } from "../../shared/axios";

// actions type

const ADD_POST = "ADD_POST";
const GET_POST = "GET_POST";

// action creators
// post 를 받아서 post로 보낸다.
const addPost = createAction(ADD_POST, (post) => ({ post }));
const getPost = createAction(GET_POST, (postList) => ({ postList }));

// initialState
const initialState = {
  list: [],
};

// middleware
const addPostMD = (post) => {
  return function (dispatch, getState, { history }) {
    // console.log("addPost미들웨어, post", post);
    apis
      .addPostAX(post)
      .then((res) => {
        dispatch(addPost(post));
        window.alert("글 작성이 완료되었습니다.");
        history.push("/");
        console.log("addPost 액션 작동, res", res);
      })
      .catch((err) => {
        // console.log("addPost 액션이 작동하지않았습니다!");
        // console.log("addPost미들웨어, post", post);
        window.alert("글 작성에 실패하였습니다.");
      });
  };
};

const getPostMD = (postId, post) => {
  return function (dispatch, getState, { history }) {
    // console.log(postList);
    apis
      .getPostAX()
      .then((res) => {
        console.log(res);
        const postList = res.data;
        if (postId) {
          const post = postList.filter((post) => post.id === postId)[0];
          console.log("포스트아이디가 있을때 포스트", post);
          const title = post.title;
          const contents = post.contetns;
          dispatch(getPost(post, title, contents));
        } else {
          console.log(res);
          dispatch(getPost(postList));
        }
        // console.log("postList", postList);
        // console.log("getPost 동작했다");
      })
      .catch((err) => {
        // console.log(err);
      });
  };
};

// reducer
export default handleActions(
  {
    [ADD_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list.push(action.payload.post);
      }),
    [GET_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.postList;
        // console.log("draft.list", draft.list);
      }),
  },
  initialState
);

const actionCreators = {
  addPost,
  addPostMD,
  getPost,
  getPostMD,
};

export { actionCreators };
