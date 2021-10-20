import React from "react";
import styled from "styled-components";
import { Grid, Text, Input } from "../elements";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../shared/App.css";
import { history } from "../redux/configureStore";
import { actionCreators as userActions } from "../redux/modules/user";

const Header = (props) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  console.log(user);

  const tologin = () => {
    console.log("history", history);
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
      <Grid is_flex>
        <Font>velog</Font>
        <div>
          <Btn onClick={toLogOut}>로그아웃</Btn>
          <Btn>내정보</Btn>
        </div>
      </Grid>
    );
  }
  return (
    <Grid is_flex>
      <Text>velog</Text>
      <div>
        <Btn onClick={tologin}>로그인</Btn>
        <Btn onClick={toSignup}>회원가입</Btn>
      </div>
    </Grid>
  );
};
const Font = styled.text``;

const Btn = styled.button`
  margin: 0px 10px 0px 0px;
  font-size: 14px;
  background-color: #343a40;
  color: white;
  padding: 10px 15px;
  font-weight: bold;
  border-radius: 25px;
  border: none;
`;

export default Header;
