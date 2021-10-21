import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../utils/apis";

/* import 'moment';
import moment from 'moment'; */

// actions Type
const ADD_COMMENT = "ADD_COMMENT";
const REMOVE_COMMENT = "REMOVE_COMMENT";
const EDIT_COMMENT = "EDIT_COMMENT";
const GET_COMMENT = "GET_COMMENT";

// action creators
const addComment = createAction(ADD_COMMENT, (comment) => ({ comment }));
const removeComment = createAction(REMOVE_COMMENT, (commentId) => ({
  commentId,
}));
const editComment = createAction(EDIT_COMMENT, (commentId, comment) => ({
  commentId,
  comment,
}));
const getComment = createAction(GET_COMMENT, (commentList) => ({
  commentList,
}));

//initialState
const initialState = {
  commentList: [],
};

//middleware

const getCommentDB = (postId) => {
  return function (dispatch, getState, { history }) {
    apis
      .getComment(postId)
      .then((res) => {
        dispatch(getComment(res.data));
        // console.log("응답", res.data);
      })
      .catch((e) => {
        console.error(e);
        alert("댓글을 불러오는데 실패하였습니다.");
      });
  };
};

const addCommentDB = (comment) => {
  return function (dispatch, getState, { history }) {
    apis
      .addComment(comment)
      .then((res) => {
        dispatch(getCommentDB(comment.postId));
        console.log(res.data);
        // dispatch(addComment(res.data));
      })
      .catch((e) => {
        console.error(e);
        alert("댓글 등록에 실패하였습니다.");
      });
  };
};

// const editCommentDB = (commentId, data) => {
//   return function (dispatch, getState, { history }) {
//     apis
//       .put(`/api/comments/${commentId}`, data)
//       .then((res) => {
//         dispatch(editComment(commentId, res.data));
//       })
//       .catch((e) => {
//         console.error(e);
//         alert("댓글 수정에 실패하였습니다.");
//       });
//   };
// };

const removeCommentDB = (commentId) => {
  return function (dispatch, getState, { history }) {
    apis
      .removeComment(commentId)
      .then((res) => {
        dispatch(removeComment(commentId));
      })
      .catch((e) => {
        console.error(e);
        alert("댓글 삭제에 실패하였습니다.");
      });
  };
};

//reducer
export default handleActions(
  {
    [ADD_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.commentList.unshift(action.payload.comment);
      }),
    // [REMOVE_COMMENT]: (state, action) =>
    //   produce(state, (draft) => {
    //     const id = action.payload.commentId;
    //     draft.commentList = draft.commentList.filter((e) => {
    //       return e.id !== id;
    //     });
    //   }),
    // [EDIT_COMMENT]: (state, action) =>
    //   produce(state, (draft) => {
    //     let idx = draft.commentList.findIndex(
    //       (e) => e.id === action.payload.commentId
    //     );
    //     console.log(action.payload.comment);

    //     draft.commentList[idx] = {
    //       ...action.payload.comment,
    //     };
    //   }),
    [GET_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.commentList = action.payload.commentList;
      }),
  },
  initialState
);

//action creator export
const actionCreators = {
  addComment,
  removeComment,
  editComment,
  getComment,
  addCommentDB,
  getCommentDB,
  // editCommentDB,
  removeCommentDB,
};

export { actionCreators };
