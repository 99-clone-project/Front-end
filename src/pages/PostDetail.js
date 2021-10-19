import React from "react";
import styled from "styled-components";

import CommentList from "../components/CommentList";
import CommentWrite from "../components/CommentWrite";

const PostDetail = (props) => {
  return (
    <React.Fragment>
      <DetailBox>
        <h1>React 10분만에 정복하는 법</h1>
        <Info>
          <div>
            <UserName>bombom</UserName>
            <Separator>·</Separator>
            <Time>1시간 전</Time>
          </div>
          <div>
            <button>수정</button>
            <button>삭제</button>
          </div>
        </Info>
        <Content>
          <div>
            <p>제목 어그로 죄송합니다. 저도 그 방법이 알고싶네요.</p>
          </div>
          <Writer>
            <Image src={"/img/profile.png"} />
            <div>봄봄</div>
          </Writer>
        </Content>
        <Hr></Hr>
      </DetailBox>

      <CommentWrite />
      <CommentList />
    </React.Fragment>
  );
};

const DetailBox = styled.div`
  box-sizing: border-box;
  max-width: 768px;
  min-width: 452px;
  width: 100%;
  margin: auto;

  h1 {
    text-align: left;
    font-size: 3rem;
    line-height: 1.5;
    letter-spacing: -0.004em;
    margin-top: 0px;
    font-weight: 800;
    color: rgb(52, 58, 64);
    margin-bottom: 2rem;
    word-break: keep-all;
  }
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 32px;
  button {
    padding: 0px;
    border: none;
    outline: none;
    background: none;
    cursor: pointer;
    font-size: 0.875rem;
    margin-left: 0.5rem;
    color: rgb(134, 142, 150);
    :hover {
      color: black;
    }
  }
`;

const UserName = styled.span`
  font-size: 0.875rem;
  color: rgb(52, 58, 64);
  font-weight: bold;
  cursor: pointer;
  :hover {
    color: #495057;
    text-decoration: underline;
  }
`;

const Separator = styled.span`
  margin-left: 0.5rem;
  margin-right: 0.5rem;
`;

const Time = styled.span`
  font-size: 0.875rem;
`;

const Content = styled.div`
  div {
    display: flex;
    font-size: 1.5rem;
    ine-height: 1.5;
    font-weight: bold;
    color: rgb(33, 37, 41);
    p {
      font-size: 1.125rem;
      color: rgb(34, 36, 38);
      font-weight: 400;
    }
  }
`;

const Writer = styled.div`
  margin: 32px 0px;
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  border-radius: 50%;
  margin-right: 1rem;
`;

const Hr = styled.div`
  background: rgb(233, 236, 239);
  width: 100%;
  height: 1px;
  margin-top: 2rem;
  margin-bottom: 1.5rem;
`;

export default PostDetail;
