import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../utils/apis";

// actions type
const ADD_POST = "ADD_POST";
const GET_POST = "GET_POST";
const DELETE_POST = "DELETE_POST";

// action creators
const addPost = createAction(ADD_POST, (post) => ({ post }));
const getPost = createAction(GET_POST, (postList) => ({ postList }));
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
    apis
      .addPostAX(post)
      .then((res) => {
        dispatch(addPost(post));
        window.alert("글 작성이 완료되었습니다.");
        window.location.replace("/");
      })
      .then(() => {
        history.replace("/");
      })
      .catch((err) => {
        window.setTimeout(() => {
          history.replace("/");
        }, 1000);
      });
  };
};

const getPostMD = (postId, post) => {
  return function (dispatch, getState, { history }) {
    apis
      .getPostAX()
      .then((res) => {
        const postList = res.data;
        if (postId) {
          const post = postList.filter((post) => postId === postId[0]);
          const title = post.title;
          const content = post.content;
          const image = post.image;
          dispatch(getPost(post, title, content, image));
        } else {
          dispatch(getPost(postList));
        }
      })
      .catch((err) => {});
  };
};

const deletePostMD = (currentpostId) => {
  return function (dispatch, getState, { history }) {
    apis
      .deletePostAX(currentpostId)
      .then((res) => {
        history.push("/");
        window.alert("대박 잘지워짐");
        dispatch(deletePost(currentpostId));
      })
      .catch((err) => {});
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
      }),
    [DELETE_POST]: (state, action) =>
      produce(state, (draft) => {
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
