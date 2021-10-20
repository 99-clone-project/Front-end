import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
// import Grid from "../elements/Grid";
import profile from "../assets/profile.png";
// import PostList from "../pages/PostList";
import { history } from "../redux/configureStore";

const Card = (props) => {
  const postList = useSelector((state) => state.post.list);
  console.log("스테이트.포스트.리스트", postList);
  // console.log("postList", postList);
  console.log("props", props);

  const postId = props.post.postId;
  // console.log(postId);
  // const postUser = props.post.user.nickname;
  console.log(postList[props.index]);
  return (
    <>
      <CardWrap
        onClick={() => {
          history.push(`/detail/${postId}`);
        }}
      >
        <Head>
          <CardImg src={postList[props.index].image} />
        </Head>
        <Body>
          <Title>{postList[props.index].title}</Title>
          <Description>{postList[props.index].content}</Description>
        </Body>
        <Footer>
          {/* <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8M_EHLRjkRkZuxWMmYM50R0at19m9iJegrh8FLEte4Es1Qtb1ibZqluQulkZQPr-2KWY&usqp=CAU" />
          <image /> */}
          {/* by {postList[props.index].user.nickname} */}
          by {postList[props.index].user.nickname}
        </Footer>
      </CardWrap>
    </>
  );
};

const CardWrap = styled.div`
  /* width: 320px;
  cursor: pointer; */
  /* margin: 50px; */
  /* box-shadow: 3px 3px 15px 1px #e5e5e5;
  &:hover {
    box-shadow: 3px 3px 15px 1px #9e9e9e;
    transition: 0.3s; */
  /* margin-top: 1px; */
  /* } */
  width: 340px;
  height: 380px;
  display: flex;
  flex-direction: column;
  justify-content: flex;
  transition: box-shadow 0.25s ease-in 0s, transform 0.25s ease-in 0s;
  margin: 50px auto 20px auto;
  margin-right: 20px;
  border-radius: 10px;
  background-color: white;
  :hover {
    cursor: pointer;
    transform: translateY(-12px);
    box-shadow: 0 3px 40px 0 #ddd;
  }
`;
const Head = styled.div`
  width: 320px;
  height: 167.01px;
  background-color: yellow;
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
  margin: 20px;
`;
const Title = styled.h4``;
const Description = styled.p``;
const Footer = styled.div`
  height: 35px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 20px 20px 20px 20px;
`;
const Image = styled.image`
  width: 23.99px;
  height: 23.99px;
  margin: 8px;

  background-size: cover;
  background-color: white;
`;

export default Card;
