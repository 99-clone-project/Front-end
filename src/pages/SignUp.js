import React, { useState } from "react";
import styled from "styled-components";
import { Grid, Text, Input } from "../elements";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { mailRegCheck } from "../utils/validation";

const SignUp = (props) => {
  // 액션을 실행해줄 dispatch 훅을 선언한다.
  const dispatch = useDispatch();

  // useState로
  const [email, setEmail] = React.useState("");
  const [pw, setPw] = React.useState("");
  const [pwcheck, setPwCheck] = React.useState("");
  const [nickname, setNickName] = React.useState("");

  const setSignup = () => {
    const user = {
      email: email,
      pw: pw,
      pwcheck: pwcheck,
      nickname: nickname,
    };
    // 아이디와 패스워드, 유저 닉네임이 있는 지 확인!
    // 미들웨어에서 처리해도 괜찮지만, 딱봐도 어림없는 값(공백 등등)이 굳이 미들웨어까지 갈 필요 없으니 여기에서 막아줄거예요.
    if (email === "" || pw === "" || pwcheck === "" || nickname === "") {
      window.alert("아이디, 패스워드, 닉네임을 모두 입력해주세요!");
      return;
    }
    // id가 이메일 형식 확인
    if (!mailRegCheck(email)) {
      window.alert("이메일 형식이 맞지 않습니다!");
      return;
    }
    if (!pw || pw.length < 4) {
      alert("비밀번호 입력란을 다시 확인해주세요! 비밀번호는 4자리 이상입니다");
      return;
    }
    // 비밀번호와 비밀번호 확인 부분이 일치하나 확인!
    if (pw !== pwcheck) {
      window.alert("패스워드와 패스워드 확인이 일치하지 않습니다!");
      return;
    }
    if (!nickname) {
      alert("사용하실 닉네임을 입력해주세요!");
      return;
    }

    dispatch(userActions.signupMiddleware(user));
  };

  return (
    <Grid>
      <UserBox>
        <Text bold size="28px">
          회원가입
        </Text>
        <Input
          label="이메일"
          placeholder="이메일을 입력하세요"
          _onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></Input>
        <Input
          label="비밀번호"
          placeholder="비밀번호는 4자리 이상입니다"
          type="password"
          _onChange={(e) => {
            setPw(e.target.value);
          }}
        ></Input>
        <Input
          label="비밀번호 확인"
          placeholder="비밀번호를 다시 입력해주세요"
          type="password"
          _onChange={(e) => {
            setPwCheck(e.target.value);
          }}
        ></Input>
        <Input
          label="닉네임"
          placeholder="닉네임을 입력하세요"
          _onChange={(e) => {
            setNickName(e.target.value);
          }}
        ></Input>
        <Btn
          onClick={() => {
            console.log("회원가입!!");
            setSignup();
          }}
        >
          회원가입
        </Btn>
      </UserBox>
    </Grid>
  );
};

const UserBox = styled.div`
  margin: auto;
  padding: 20px;
  min-width: 250px;
  width: auto;
  height: auto;
`;

const Btn = styled.button`
  margin: 10px 10px 0px 0px;
  font-size: 14px;
  background-color: #343a40;
  color: white;
  padding: 10px 15px;
  font-weight: bold;
  border-radius: 25px;
  border: none;
`;
export default SignUp;
