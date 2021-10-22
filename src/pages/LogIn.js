import React, { useState } from "react";
import styled from "styled-components";
import { Grid, Text, Input } from "../elements";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { mailRegCheck } from "../utils/validation";
import { useSelector } from "react-redux";

const Login = (props) => {
  const dispatch = useDispatch();

  const [email, loginEmail] = React.useState("");
  const [pw, loginPw] = React.useState("");

  const onLogin = () => {
    const user = {
      email: email,
      pw: pw,
    };

    if (!mailRegCheck(email) || !email) {
      alert("이메일 형식을 다시 확인해주세요!");
      return;
    }

    if (!pw || pw.length < 4) {
      alert("비밀번호 입력란을 다시 확인해주세요! 비밀번호는 4자리 이상입니다");
      return;
    }
    dispatch(userActions.loginMiddleware(user));
  };

  return (
    <div>
      <UserBox>
        <Text bold size="26px">
          로그인
        </Text>
        <Input
          label="이메일"
          placeholder="이메일을 입력하세요"
          _onChange={(e) => {
            loginEmail(e.target.value);
          }}
          style={{ border: "none" }}
        ></Input>
        <Input
          label="비밀번호"
          placeholder="비밀번호을 입력하세요"
          type="password"
          style={{ border: "none" }}
          _onChange={(e) => {
            loginPw(e.target.value);
          }}
        ></Input>
        <Btn
          onClick={() => {
            onLogin();
          }}
        >
          {" "}
          로그인{" "}
        </Btn>
      </UserBox>
    </div>
  );
};

const UserBox = styled.div`
  margin: auto;
  padding: 10px;
  min-width: 250px;
  width: auto;
  height: auo;
`;

const Btn = styled.button`
  margin: 10px 10px 0px 0px;
  font-size: 16px;
  background-color: #4cbc9b;
  color: white;
  padding: 10px 15px;
  font-weight: bold;
  width: 95.99px;
  height: 47.99px;
  border: none;
  position: absolute;
  right: 36px;
  border: none;
`;

export default Login;
