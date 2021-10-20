import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
// import Grid from "../elements/Grid";
import profile from "../assets/profile.png";
// import PostList from "../pages/PostList";
import { history } from "../redux/configureStore";

const Card = (props) => {
  const postList = useSelector((state) => state.post.list);
  // console.log("스테이트.포스트.리스트", postList);
  // console.log("postList", postList);
  // console.log("props", props);
  // console.log(props.postList);

  const modDate = postList[props.index].regDate.split("T")[0];
  const yearMonthDay = modDate.split("-", 3);
  const year = yearMonthDay[0];
  const month = yearMonthDay[1];
  const day = yearMonthDay[2];
  const writtenDate = year + "년 " + month + "월 " + day + "일";
  // console.log(writtenDate);

  const postId = props.post.postId;
  // console.log(postId);
  // const postUser = props.post.user.nickname;
  // console.log(postList[props.index]);
  // console.log(postList[props.index].content);
  function regExp() {
    let str = postList[props.index].content;
  }
  return (
    <>
      <CardWrap
        onClick={() => {
          history.push(`/detail/${postId}`);
        }}
      >
        <CardImg src="https://media.vlpt.us/images/moseoh/post/02d1cb92-64f8-437d-8932-472a15d85e01/velog_logo.png" />
        <Body>
          <Title>{postList[props.index].title}</Title>
          <Description>{postList[props.index].content}</Description>
          <Date>{writtenDate}</Date>
        </Body>
        <Footer>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={"/img/profile.png"}
              style={{
                width: "23.99px",
                height: "23.99px",
                margin: "0 8px 0 0",
                backgroundSize: "cover",
                borderRadius: "50%",
              }}
            />
            <Span>by</Span>
            <UserName>{postList[props.index].user.nickname}</UserName>
          </div>
          <Like>
            <img src={"/img/heart.PNG"} />
            <span>100</span>
          </Like>
        </Footer>
      </CardWrap>
    </>
  );
};

const CardWrap = styled.div`
  width: 20rem;
  background: white;
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 4%) 0px 4px 16px 0px;
    transition: box-shadow 0.25s ease-in 0s, transform 0.25s ease-in 0s;
    margin: 1rem;
    overflow: hidden;
    display: flex;
    flex-direction: column;




  /* cursor: pointer; */
  /* margin: 50px; */
  /* box-shadow: 3px 3px 15px 1px #e5e5e5; */
  /* &:hover {
    box-shadow: 3px 3px 15px 1px #9e9e9e;
    transition: 0.3s; */
  /* margin-top: 1px; */
  /* } */
  /* width: 340px; */
  /* height: 380px; */
  /* display: flex;
  flex-direction: column;
  justify-content: flex;
  transition: box-shadow 0.25s ease-in 0s, transform 0.25s ease-in 0s;
  box-shadow: 3px 3px 15px 1px #e5e5e5;
  margin-right: 20px;
  border-radius: 4px;
  background-color: white;
  :hover {
    cursor: pointer;
    transform: translateY(-8px); */
    /* box-shadow: 0 3px 40px 0 #ddd; */
    /* box-shadow: 3px 3px 15px 1px #9e9e9e; */
  }
`;

const CardImg = styled.img`
  width: 100%;
  background-size: cover;
`;
const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  /* margin: 20px; */
  width: 320px;
  height: 132.062px;
  padding: 16px;
`;
const Title = styled.h4`
  color: #212529;
  font-size: 16px;
  margin: 0 0 4px;
  /* word-break: break-word; */
  font-weight: bold;
  width: 288.02px;
  height: 23.33px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;
const Description = styled.p`
  margin: 0 0 24px;
  width: 288.02px;
  height: 62.986px;
  color: #495057;
  font-size: 14px;
  line-height: 1.5;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  text-align: left;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

const Date = styled.div`
  height: 17.78px;
  font-size: 12px;
  color: #868e96;
`;
const Footer = styled.div`
  padding: 10px 16px;
  height: 24.1px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* margin: 20px 20px 20px 20px; */
  cursor: pointer;
  border-top: 1px solid rgb(248, 249, 250);
`;
const Image = styled.image`
  width: 23.99px;
  height: 23.99px;
  margin: 0 8px 0 0;
  /* background-color: white; */
  background-size: cover;
  border-radius: 50%;
`;

const Span = styled.span`
  color: rgb(134, 142, 150);
  font-size: 0.75rem;
  line-height: 1.5;
  margin-right: 0.25rem;
`;

const UserName = styled.span`
  color: #343a40;
  font-size: 12px;
  font-weight: bold;
`;

const Like = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 1.75rem;
    height: 1.6rem;
  }
  span {
    font-size: 0.75rem;
  }
`;

export default Card;
