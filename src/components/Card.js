import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
// import Grid from "../elements/Grid";
import profile from "../assets/profile.png";
// import PostList from "../pages/PostList";

const Card = (props) => {
  const postList = useSelector((state) => state.post.list);
  // console.log("스테이트.포스트.리스트", postList);
  // console.log("postList", postList);
  console.log("props", props);
  return (
    <>
      <CardWrap>
        <Head>
          <CardImg src={postList[props.index].image} />{" "}
        </Head>
        <Body>
          <Title>{postList[props.index].title}</Title>
          <Description>{postList[props.index].contents}</Description>
        </Body>
        <Footer>
          {/* <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8M_EHLRjkRkZuxWMmYM50R0at19m9iJegrh8FLEte4Es1Qtb1ibZqluQulkZQPr-2KWY&usqp=CAU" />
          <image /> */}
          by username
        </Footer>
      </CardWrap>
    </>
  );
};

const CardWrap = styled.div`
  width: 320px;
  cursor: pointer;
  /* margin: 50px; */
  box-shadow: 3px 3px 15px 1px #e5e5e5;

  &:hover {
    box-shadow: 3px 3px 15px 1px #9e9e9e;
    transition: 0.3s;
    /* margin-top: 1px; */
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
  align-items: left;
  width: 288px;
  height: 132.062px;
  padding: 16px;

  background-color: red;

  text-align: left;
`;

const Title = styled.h4``;

const Description = styled.p``;
const Footer = styled.div`
  width: 288px;
  height: 23.993px;
  padding: 10px 16px;
  background-color: blue;
  border-top: 1px solid #e5e5e5;
`;

const Image = styled.image`
  width: 23.99px;
  height: 23.99px;
  margin: 8px;

  background-size: cover;
  background-color: white;
`;

export default Card;
