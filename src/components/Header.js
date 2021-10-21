import React from "react";
import styled from "styled-components";
import { Grid, Text, Input } from "../elements";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../shared/App.css";
import { history } from "../redux/configureStore";
import { actionCreators as userActions } from "../redux/modules/user";
import { actionCreators as postActions } from "../redux/modules/post";

import Card from "../components/Card";
import { fontFamily, fontSize } from "@mui/system";
import { BsSearch } from "react-icons/bs";

const Header = (props) => {
  // const rawLoginUser = localStorage.getItem("nickname");
  // const loginUser = rawLoginUser.split('"')[1];
  // const initial = loginUser.charAt(1).toUpperCase();
  // console.log(initial);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  // console.log(user);

  React.useEffect(() => {
    dispatch(postActions.getPostMD());
  }, []);

  const postList = useSelector((state) => state.post.list);
  // console.log(postList);

  const tologin = () => {
    history.push("/login");
  };
  const toSignup = () => {
    history.push("/signup");
  };

  const toLogOut = async () => {
    try {
      await dispatch(userActions.logOut());
      history.push("/");
    } catch (err) {
      console.error(err);
    }
  };

  if (user) {
    return (
      <Grid is_flex height="63.99px" width="90%">
        <FontBox
          onClick={() => {
            history.push("/");
          }}
        >
          <Font>velog</Font>
        </FontBox>
        <div>
          <BsSearch
            style={{
              width: "25px",
              height: "25px",
              marginRight: "10px",
              marginBottom: "-7px",
            }}
          />
          <Btn
            onClick={() => {
              history.push("postwrite");
            }}
          >
            새 글 작성
          </Btn>

          <button
            onClick={toLogOut}
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              backgroundColor: "#5f4541",
              color: "white",
              fontWeight: "bold",
              fontSize: "15px",
              border: "none",
            }}
          >
            {/* <div>{initial}</div> */}
          </button>
        </div>
      </Grid>
    );
  }
  return (
    <Grid is_flex height="4rem" width="90%">
      <FontBox
        onClick={() => {
          history.push("/");
        }}
      >
        <Font>velog</Font>
      </FontBox>
      <div>
        <Btn onClick={tologin}>로그인</Btn>
        <Btn onClick={toSignup}>회원가입</Btn>
      </div>
    </Grid>
  );
};

const FontBox = styled.div`
  padding: 10px;
  cursor: pointer;
`;

const Font = styled.text`
  // padding: 10px;
  // background-color: orange;
  font-size: 24px;
  font-family: "firaMono-Medium";
  color: rgb(52, 58, 64);
  // display: inline-block;
  // margin-left: 15px;
`;

const Btn = styled.button`
  cursor: pointer;
  margin: 15px 10px 15px 0px;
  font-size: 14px;
  background-color: white;

  /* background-color: #343a40; */
  color: #343a40;
  font-size: 17px;
  padding: 10px 15px;
  font-weight: bold;
  border-radius: 25px;
  border: 1px solid #343a40;

  &:hover {
    background-color: #868e96;
    transition: 0.125s;
  }
`;

export default Header;
