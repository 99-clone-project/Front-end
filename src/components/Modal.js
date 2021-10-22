import { width } from "@mui/system";
import React, { useState } from "react";
import styled from "styled-components";
import { Grid, Text, Input } from "../elements";
import Login from "../pages/LogIn";
import SignUp from "../pages/SignUp";
import { useDispatch } from "react-redux";

// Modal.jsx

const Modal = ({ modalClose }) => {
  const dispatch = useDispatch();
  const [status, setStatus] = useState(false);

  const onCloseModal = (e) => {
    console.log("e.target: ", e.target);
    console.log("e.tarcurrentTargetget: ", e.currentTarget);
    if (e.target === e.currentTarget) {
      modalClose();
    }
  };
  return (
    <>
      <Container>
        <ModalBox>
          <WelcomeBox>
            <WelcomeImg src="/img/welcome.png"></WelcomeImg>
            <WelcomeText>환영합니다!</WelcomeText>
          </WelcomeBox>
          <UserBox>
            {!status && <Login />}
            {status && <SignUp />}
            <ChangeDiv>
              {!status && (
                <>
                  <Text size="15px">아직 회원이 아니신가요?</Text>
                  <ChangBtn onClick={() => setStatus((prev) => !prev)}>
                    회원가입
                  </ChangBtn>
                </>
              )}
              {status && (
                <>
                  <Text size="15px">계정이 이미 있으신가요?</Text>
                  <ChangBtn onClick={() => setStatus((prev) => !prev)}>
                    로그인
                  </ChangBtn>
                </>
              )}
            </ChangeDiv>
          </UserBox>
        </ModalBox>
      </Container>
    </>
  );
};

const ChangeDiv = styled.div`
  display: flex;
  align-items: flex-start;
  position: absolute;
  right: 10px;
  bottom: -100px;
`;

const ChangBtn = styled.div`
  width: auto;
  margin: 15px;
  font-size: 16px;
  margin-left: 15px;
  font-weight: 600;
  color: #4cbc9b;
  font-weight: bold;

  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const WelcomeText = styled.text`
  display: inline-block;
  width: 100%;
  text-align: center;
  color: #495057;
  font-weight: bold;
  font-size: 28px;
  background-color: transparent;
`;

const WelcomeImg = styled.img`
  margin-top: 100px;
  width: 250px;
  height: 200px;
`;

const WelcomeBox = styled.div`
  padding: 24px;
  width: 250px;
  height: 450px;
  background-color: #f1f3f5;
`;

const UserBox = styled.div`
  padding: 24px;
  width: 400px;
  height: 450px;
  background-color: #fff;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  // opacity: 0.5;
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
`;

const ModalBox = styled.div`
  display: flex;
  width: auto;
  height: 390px;
  background-color: #fff;
  // Modal 창 브라우저 가운데로 조정
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  z-index: 100;
`;

const ModalButton = styled.div`
  position: relative;
  left: 80%;
  top: 10%;
  transform: translate(-50%, -50%);
`;

export default Modal;
