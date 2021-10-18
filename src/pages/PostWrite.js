import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import post, { actionCreators as postActions } from "../redux/modules/post";
import { history } from "../redux/configureStore";
import { Button } from "../elements";

const PostWrite = () => {
  const dispatch = useDispatch();

  const addPost = () => {
    dispatch(postActions.addPostMiddleware(post));
  };
  return (
    <>
      <Wrap>
        <Head>
          <Input placeholder="제목을 입력하세요" />
        </Head>
        <Body>
          <input type="file" />
          <TextArea placeholder="당신의 이야기를 적어보세요..." />
        </Body>
        <Footer>
          <ExitBtn
            onClick={() => {
              history.push("/");
            }}
          >
            나가기
          </ExitBtn>
          <SubmitBtn onClick={addPost}>출간하기</SubmitBtn>
        </Footer>
      </Wrap>
    </>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 711.11px;
  height: 90vh;
  margin: auto;
  border: 1px solid black;
`;
const Head = styled.div`
  width: 711.11px;
  /* height: 156.056px; */
  /* padding: 32px 48px 0; */
`;
const Input = styled.input`
  width: 615.111px;
  height: 156.056px;
  border: none;
  font-size: 40px;
  font-weight: bold;
`;
const Body = styled.div`
  width: 711.11px;
  padding: 0 48px;
`;
const TextArea = styled.textarea`
  width: 615.11px;
  height: 500px;
`;
const Footer = styled.div`
  position: fixed;
  bottom: 0;
  /* left: 0; */

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 678.99px;
  height: 63.993px;
  padding: 0 16px;

  box-shadow: 3px 3px 15px 1px #9e9e9e;
  /* z-index: 100; */
  background-color: #fff;
`;
const ExitBtn = styled.button`
  width: 82.257px;
  height: 40px;
  padding: 0 20px;
`;
const SubmitBtn = styled.button`
  width: 82.257px;
  height: 40px;
  padding: 0 20px;
`;
export default PostWrite;
