import React, { useState } from "react"
import styled from "styled-components"
import { Grid, Text, Input } from "../elements"
import { useDispatch } from "react-redux"
import { actionCreators as userActions } from "../redux/modules/user"
import { mailRegCheck } from "../utils/validation"

const SignUp = (props) => {
  // 액션을 실행해줄 dispatch 훅을 선언한다.
  const dispatch = useDispatch()

  // useState로 
  const [ email, setEmail] = React.useState("")
  const [ pw, setPw] = React.useState("")
  const [ pwcheck, setPwCheck] = React.useState("")
  const [ nickname, setNickName] = React.useState("")

  const setSignup = () => {
    const user = {
      email: email,
      pw: pw,
      pwcheck: pwcheck,
      nickname: nickname
    }
    dispatch(userActions.signupMiddleware(user))

  }

  return(
    <Grid>
      <UserBox>
        <Text bold size="32px">회원가입</Text>
        <Input 
        label="이메일" 
        placeholder="이메일을 입력하세요" 
        _onChange={(e)=>{
          setEmail(e.target.value)
        }}
        ></Input>
        <Input 
        label="비밀번호" 
        placeholder="비밀번호을 입력하세요" 
        type="password"
        _onChange={(e)=>{
          setPw(e.target.value)
        }}
        ></Input>
        <Input 
        label="비밀번호 확인" 
        placeholder="비밀번호를 다시 입력해주세요" 
        type="password"
        _onChange={(e)=>{
          setPwCheck(e.target.value)
        }}
        ></Input>
        <Input 
        label="닉네임" 
        placeholder="닉네임을 입력하세요"
        _onChange={(e)=>{
          setNickName(e.target.value)
        }}
        ></Input>
        <Btn
        onClick={() => {
          console.log("회원가입!!");
          setSignup();
        }}
        >회원가입!</Btn>
      </UserBox>
    </Grid>
  )
}

const UserBox = styled.div`
  border: 1px solid black;
  margin: auto;
  padding: 20px;
  min-width: 250px;
  width: 80%;
  height: 80%;
`;

const Btn= styled.button`
 margin: 10px 10px 0px 0px;
 font-size: 14px;
 background-color: #343A40;
 color: white;
 padding: 10px 15px;
 font-weight: bold;
 border-radius: 25px;
 border: none;
`;
export default SignUp