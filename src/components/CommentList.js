import React from "react";
import styled from "styled-components";

const CommentList = (props) => {
  return (
    <React.Fragment>
      <Container>
        <User>
          <UserInfo>
            <img src={"/img/profile.png"} />
            <div style={{ margin: "auto" }}>
              <UserName>봄봄</UserName>
              <Time>30분 전</Time>
            </div>
          </UserInfo>
          <Edit>
            <span>수정</span>
            <span>삭제</span>
          </Edit>
        </User>
        <Content>오늘도 화이팅!</Content>
      </Container>
    </React.Fragment>
  );
};

const Container = styled.div`
  margin-top: 2.5rem;
  box-sizing: border-box;
  width: 100%;
  max-width: 768px;
  min-width: 452px;
  margin: auto;
`;

const User = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    width: 55px;
    height: 55px;
    border-radius: 50%;
    margin-right: 0.5rem;
  }
`;

const UserInfo = styled.div`
  display: flex;
`;

const UserName = styled.div`
  font-size: 1rem;
  font-weight: bold;
  color: rgb(52, 58, 64);
  text-align: left;
`;

const Time = styled.div`
  margin-top: 0.25rem;
  color: rgb(134, 142, 150);
  font-size: 0.875rem;
`;

const Content = styled.div`
  font-size: 1.125rem;
  color: rgb(34, 36, 38);
  line-height: 1.7;
  letter-spacing: -0.004em;
  word-break: keep-all;
  overflow-wrap: break-word;
  text-align: left;
  margin: 1.5rem 0 2rem 0;
`;

const Edit = styled.div`
  span {
    cursor: pointer;
    font-size: 0.875rem;
    color: rgb(134, 142, 150);
    margin-left: 0.5rem;
    :hover {
      text-decoration: underline;
      color: #b0b5c3;
    }
  }
`;

export default CommentList;
