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
import { fontFamily } from "@mui/system";

const Header = (props) => {
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
      <Grid is_flex height="4rem" width="82%">
        <FontBox
          onClick={() => {
            history.push("/");
          }}
        >
          <Font>velog</Font>
        </FontBox>
        <div>
          <Btn
            onClick={() => {
              history.push("postwrite");
            }}
          >
            작성하기
          </Btn>
          <Btn onClick={toLogOut}>로그아웃</Btn>
        </div>
      </Grid>
    );
  }
  return (
    <Grid is_flex height="4rem" width="82%">
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
  background-color: #343a40;
  color: white;
  padding: 10px 15px;
  font-weight: bold;
  border-radius: 25px;
  border: none;
  &:hover {
    background-color: #868e96;
    transition: 0.125s;
  }
`;

export default Header;
