import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import profile from "../assets/profile.png";
import { history } from "../redux/configureStore";
import { actionCreators as postActions } from "../redux/modules/post";

const Card = (props) => {
  const dispatch = useDispatch();
  const postList = useSelector((state) => state.post.list);

  // 게시물추가 할때 올렸던 이미지 카드에 추가
  const image = postList[props.index].image;

  // 게시물 작성 날짜
  const modDate = postList[props.index].regDate.split("T")[0].split("-", 3);
  const year = modDate[0];
  const month = modDate[1];
  const day = modDate[2];
  const postdate = year + "년 " + month + "월 " + day + "일";

  // 카드에 마크다운 언어 없애기 위해서
  const postId = props.post.postId;
  const content = postList[props.index].content.split("![")[0];
  const hashContent = content.replaceAll("#", "");
  const starContent = hashContent.replaceAll("*", "");

  React.useEffect(() => {
    dispatch(postActions.getPostMD());
  }, []);

  return (
    <>
      <CardWrap
        onClick={() => {
          history.push(`/detail/${postId}`);
        }}
      >
        <CardImg src={image} />
        <Body>
          <Title>{postList[props.index].title}</Title>
          <Description>{starContent}</Description>
          <Date>{postdate}</Date>
        </Body>
        <Footer>
          <FooterLeft>
            <Profile src={"/img/profile.png"} />
            <Span>by</Span>
            <UserName>{postList[props.index].user.nickname}</UserName>
          </FooterLeft>
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
  width: 320px;
  background: white;
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 4%) 0px 4px 16px 0px;
  transition: box-shadow 0.25s ease-in 0s, transform 0.25s ease-in 0s;
  margin: 1rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 3px 3px 15px 1px #e5e5e5;
  &:hover {
    box-shadow: 3px 3px 15px 1px #9e9e9e;
    transition: 0.3s;
    cursor: pointer;
    transform: translateY(-8px);
  }
`;
const CardImg = styled.div`
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-repeat: no-repeat;
  /* text-align: center;
  display: flex; */
  /* justify-content: center;
  align-items: center;
  flex-direction: row; */
  /* margin: auto; */
  height: 167px;
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
const FooterLeft = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const Profile = styled.img`
  width: 23.99px;
  height: 23.99px;
  margin: 0 8px 0 0;
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
