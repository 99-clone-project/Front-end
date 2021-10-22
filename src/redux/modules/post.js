import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import { apis } from "../../utils/apis";
import { history } from "../configureStore";

// actions type
const ADD_POST = "ADD_POST";
const GET_POST = "GET_POST";
const GET_DETAIL_POST = "GET_DETAIL_POST";
const DELETE_POST = "DELETE_POST";

// action creators
// post 를 받아서 post로 보낸다.
const addPost = createAction(ADD_POST, (post) => ({ post }));
const getPost = createAction(GET_POST, (postList) => ({ postList }));
// const getDetailPost = createAction(GET_DETAIL_POST, (currentpostId, post) => ({
//   currentpostId,
//   post,
// }));
const deletePost = createAction(DELETE_POST, (currentpostId) => ({
  currentpostId,
}));

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
        // history.replace("/");
        // console.log("addPost 액션 작동, res", res);
        window.location.replace("/");

        // window.setTimeout(() => {
        //   history.replace("/");
        // }, 1000);
      })
      .then(() => {
        history.replace("/");
      })
      .catch((err) => {
        // console.log("addPost 액션이 작동하지않았습니다!");
        // console.log("addPost미들웨어, post", post);
        // window.alert("글 작성에 실패하였습니다.");
        // window.location("/");
        window.setTimeout(() => {
          history.replace("/");
        }, 1000);
      });
  };
};

const getPostMD = (postId, post) => {
  return function (dispatch, getState, { history }) {
    // console.log(postList);
    apis
      .getPostAX()
      .then((res) => {
        // console.log(res);
        const postList = res.data;
        // console.log(postList);
        if (postId) {
          const post = postList.filter((post) => postId === postId[0]);
          // console.log(postId);
          // console.log("포스트아이디가 있을때 포스트", post);
          const title = post.title;
          // console.log(title);
          const content = post.content;
          const image = post.image;
          console.log(title, content, image);
          dispatch(getPost(post, title, content, image));
        } else {
          // console.log(res);
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

// const getDetailPostMD = (currentpostId, post) => {
//   return function (dispatch, getState, { history }) {
//     // console.log(postList);
//     apis
//       .getPostAX()
//       .then((res) => {
//         console.log(res);
//         const postList = res.data;
//         console.log(postList);
//         const post = postList.filter(
//           (post) => post.postId === Number(currentpostId)[0]
//         );
//         console.log(currentpostId);
//         console.log("포스트아이디가 있을때 포스트", post);
//         const title = post.title;
//         console.log(title);
//         const content = post.content;
//         dispatch(getPost(post, title, content));
//       })
//       .catch((err) => {
//         // console.log(err);
//       });
//   };
// };

const deletePostMD = (currentpostId) => {
  return function (dispatch, getState, { history }) {
    apis
      .deletePostAX(currentpostId)
      .then((res) => {
        history.push("/");
        window.alert("대박 잘지워짐");
        console.log(res);
        dispatch(deletePost(currentpostId));
      })
      .catch((err) => console.log(err));
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
    [DELETE_POST]: (state, action) =>
      produce(state, (draft) => {
        console.log(action.payload.postId);
        draft.list = draft.list.filter(
          (post) => post.id !== action.payload.postId
        );
      }),
  },
  initialState
);

const actionCreators = {
  addPost,
  addPostMD,
  getPost,
  getPostMD,
  deletePost,
  deletePostMD,
};

export { actionCreators };
