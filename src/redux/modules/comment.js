import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";

//axios
import { apis } from "../lib/axios";

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
const getComment = createAction(GET_COMMENT, (comments) => ({ comments }));

//initialState
const initialState = {
  commentList: [],
};

//middleware
export const addCommentDB = (_comment) => {
  return function (dispatch, getState, { history }) {
    console.log("미들웨어", _comment);
    dispatch(addComment(_comment));
  };
};

//reducer
export default handleActions(
  {
    [ADD_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        console.log(action);
        draft.commentList.unshift(action.payload.comment);
      }),
    [REMOVE_COMMENT]: (state, action) => produce(state, (draft) => {}),
    [EDIT_COMMENT]: (state, action) => produce(state, (draft) => {}),
    [GET_COMMENT]: (state, action) => produce(state, (draft) => {}),
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
};

export { actionCreators };
