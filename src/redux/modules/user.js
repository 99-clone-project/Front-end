import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../utils/apis";
import jwt_decode from "jwt-decode";
import { setCookie, deleteCookie, getCookie } from "../../utils/cookie";

const POST_LOGIN = "POST_LOGIN";
const SET_USER = "SET_USER";
const LOG_OUT = "LOG_OUT";

const postLogin = createAction(POST_LOGIN, (user) => ({ user }));
const setUser = createAction(SET_USER, (token) => ({ token }));
const logOut = createAction(LOG_OUT, (user) => ({ user }));

const initialState = {
  user: null,
  isLogIn: false,
};

const signupMiddleware = (user) => {
  return (dispatch, { history }) => {
    apis
      .signUp(user)
      .then((res) => {
        // console.log(res.data);
        window.location.href = "/login";
      })
      .catch((error) => {
        const errorResposnse = error.response;
        const errorMessage = errorResposnse?.data?.result ?? "회원가입 실패!.";
        window.alert(errorMessage);
        // history.push("/");
      });
  };
};
const loginMiddleware = (params) => {
  return (dispatch) => {
    apis
      .login(params)
      .then((res) => {
        console.log(res)
       // console.log(res.data[0]);
        const username = res.data[0]
       // console.log(Object.values(username))
        const map = new Map(Object.entries(username));
       // console.log(map.get('nickname'))
       // const localStorage = {nickname: username};
        window.localStorage.setItem("nickname", JSON.stringify(map.get('nickname')))
        
        const { token } = res.data[1];
        // 기존에 쿠키가 브라우저 있었으면, 다시 삭제하고 등록해주기!
        if (getCookie("user")) {
          deleteCookie("user");

          // console.log("user 있음", document.cookie);
        }
        setCookie("user", token);
        // 쿠키 등록이 끝나면 redux user에 세팅해주기!
        dispatch(setUser(token));
        window.alert("로그인 성공!");
        window.location.href = "/";
      })
      .catch((error) => {
        window.alert("로그인에 실패!");
        console.log(error);
      });
  };
};

const logOutMiddleware = async () => {
  return (dispatch, { history }) => {
    apis.logout().then((res) => {
      //console.log(res.data);
      dispatch(logOut());
      window.alert("로그아웃 되었습니다");
      window.location.href = "/";
      //history.push("/");
    });
  };
};

export default handleActions(
  {
    [POST_LOGIN]: (state, action) =>
      produce(state, (draft) => {
        draft.user = action.payload.user;
      }),
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        const decoded = jwt_decode(action.payload.token);
        // console.log(decoded);
        draft.user = decoded;
        draft.isLogIn = true;
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        deleteCookie("user");
        localStorage.clear()
        draft.user = null;
        draft.isLoggedIn = false;
      }),
  },
  initialState
);

export const actionCreators = {
  signupMiddleware,
  loginMiddleware,
  logOutMiddleware,
  setUser,
  logOut,
};