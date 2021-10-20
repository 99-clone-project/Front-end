import React, {useState} from "react"
import styled from "styled-components"
import { Grid, Text, Input } from "../elements"
import { useDispatch } from "react-redux"
import { actionCreators as userActions} from "../redux/modules/user"
import { mailRegCheck } from "../utils/validation"
import { useSelector } from "react-redux"


const Login = (props) => {
  const dispatch = useDispatch()

  const [email, loginEmail] = React.useState("")
  const [pw, loginPw] = React.useState("")

  const onLogin = () => {
    const user = {
      email: email,
      pw: pw
    }

    dispatch(userActions.loginMiddleware(user))
  }

  return(
    <Grid>
      <UserBox>
        <Text bold size="32px">로그인</Text>
        <Input 
        label="이메일" 
        placeholder="이메일을 입력하세요" 
        _onChange={(e) => {
          loginEmail(e.target.value)
        }}
        ></Input>
        <Input 
        label="비밀번호" 
        placeholder="비밀번호을 입력하세요" 
        type="password"
        _onChange={(e) => {
          loginPw(e.target.value)
        }}
        ></Input>
        <Btn
        onClick={() =>{
          console.log("로그인!");
          onLogin();
        }}
        > 로그인 </Btn>
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

export default Login;