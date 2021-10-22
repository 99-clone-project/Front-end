import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import CommentWrite from "../components/CommentWrite";
import { actionCreators as postActions } from "../redux/modules/post";

// 마크다운 뷰어 토스트ui 라이브러리 사용
import "@toast-ui/editor/dist/toastui-editor-viewer.css";
import { Viewer } from "@toast-ui/react-editor";

// React Icons
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { RiBookmarkFill } from "react-icons/ri";

const Detail = (props) => {
  const dispatch = useDispatch();

  // 지금 보고있는 게시물의 postId, title, content
  const currentpostId = props.match.params.postId;
  const postList = useSelector((state) => state.post.list);
  const post = postList.filter(
    (post) => post.postId === Number(currentpostId)
  )[0];
  const title = post.title;
  const content = post.content;

  // 지금 로그인 한 유저의 이메일 앞부분
  const rawUserId = post.user.email;
  const userId = rawUserId.split("@")[0];
  const nickname = post.user.nickname;

  // 지금 로그인 한 유저의 닉네임
  const rawLoginUser = localStorage.getItem("nickname");
  const loginUser = rawLoginUser.split('"')[1];

  // 게시물 작성 날짜
  const modDate = post.regDate.split("T")[0];
  const yearMonthDay = modDate.split("-", 3);
  const year = yearMonthDay[0];
  const month = yearMonthDay[1];
  const day = yearMonthDay[2];
  const writtenDate = year + "년 " + month + "월 " + day + "일";

  const deletePost = () => {
    dispatch(postActions.deletePostMD(currentpostId));
  };

  React.useEffect(() => {
    dispatch(postActions.getPostMD());
  }, []);

  return (
    <React.Fragment>
      <DetailBox>
        <h1>{title}</h1>
        <Info>
          <div>
            <UserName>{userId}</UserName>
            <Separator>·</Separator>
            <Time>{writtenDate}</Time>
          </div>
          {/* 게시물 작성 한 사람과 현재 로그인 된 유저가 같을때에만 보임*/}
          {nickname === loginUser ? (
            <div>
              <button>수정</button>
              <button onClick={deletePost}>삭제</button>
            </div>
          ) : null}
        </Info>
        <div>
          <Box>
            <BoxContent>{userId + " 님의 게시물 입니다."}</BoxContent>
            <RiBookmarkFill
              style={{
                width: "35px",
                height: "40px",
                color: " rgb(18, 184, 134)",
                position: "absolute",
                top: "-8",
                right: "20",
                backgroundColor: "transparent",
              }}
            />
            <BoxFooter>
              <BoxFooterLeft>
                <Select></Select>
                목록 보기
              </BoxFooterLeft>
              <BoxFooterRight>
                <div
                  style={{
                    backgroundColor: "transparent",
                    paddingBottom: "90px",
                  }}
                >
                  1/1
                </div>
                <Forward>
                  <IoIosArrowDropleftCircle />
                </Forward>
                <Backward>
                  <IoIosArrowDroprightCircle />
                </Backward>
              </BoxFooterRight>
            </BoxFooter>
          </Box>
          <div>
            <Viewer initialValue={content} height="1000px" />
          </div>
          <Writer>
            <Image src={"/img/profile.png"} />
            <div>{nickname}</div>
          </Writer>
        </div>
        <Hr></Hr>
      </DetailBox>
      <CommentWrite />
    </React.Fragment>
  );
};

const Box = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 688.007px;
  height: 100.861px;
  margin: 40px 0;
  padding: 32px 24px 10px 24px;
  background: rgb(248, 249, 250);
  box-shadow: rgb(0 0 0 / 6%) 0px 0px 4px 0px;
  color: rgb(73, 80, 87);
  font-size: 24px;
  font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue",
    "Apple SD Gothic Neo", "Malgun Gothic", "맑은 고딕", 나눔고딕,
    "Nanum Gothic", "Noto Sans KR", "Noto Sans CJK KR", arial, 돋움, Dotum,
    Tahoma, Geneva, sans-serif;
  font-weight: bold;
`;
const BoxContent = styled.div`
  background-color: transparent;
  color: #495057;
`;
const BoxFooter = styled.div`
  display: flex;
  justify-content: space-between;
  height: 23.99px;
  font-weight: normal;
  font-size: 16px;
  background-color: transparent;
`;
const BoxFooterLeft = styled.div`
  background-color: transparent;
  color: #495057;
`;
const Select = styled.select`
  border: none;
  margin-right: 5px;
  background-color: transparent;
  color: #adb5bd;
`;
const BoxFooterRight = styled.div`
  display: flex;
  color: #adb5bd;
  font-size: 14px;
  background-color: transparent;
`;
const Forward = styled.div`
  color: #adb5bd;
  background-color: transparent;
  margin-left: 10px;
  font-size: 20px;
`;
const Backward = styled.div`
  color: #adb5bd;
  background-color: transparent;
  margin-left: 10px;
  font-size: 20px;
`;
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
  color: #495057;
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
export default Detail;
