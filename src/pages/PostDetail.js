import "@toast-ui/editor/dist/toastui-editor-viewer.css";
import { Viewer } from "@toast-ui/react-editor";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { actionCreators as postActions } from "../redux/modules/post";
import { useParams } from "react-router-dom";
import { history } from "../redux/configureStore";
import CommentList from "../components/CommentList";
import CommentWrite from "../components/CommentWrite";
import { apis } from "../utils/apis";

const Detail = (props) => {
  const dispatch = useDispatch();

  const currentpostId = props.match.params.postId;
  // console.log("currentpostId", currentpostId);

  React.useEffect(() => {
    // async function fetchData() {
    //   const res = await apis.getPostDetailAX(currentpostId);
    //   setPost(res.data.post);
    //   console.log(res.data);
    // }
    // fetchData();
    // dispatch(postActions.getPostMD(currentpostId));
  }, []);

  const postList = useSelector((state) => state.post.list);
  // console.log(useSelector((state) => state));
  // console.log(postList);

  const post = postList.filter(
    (post) => post.postId === Number(currentpostId)
  )[0];
  console.log("post", post);
  // const post_idx = postList.findIndex(
  //   (post) => post.postId === Number(currentpostId)
  // );
  // console.log(post_idx);

  const title = post.title;
  const content = post.content;
  // console.log(title, content);
  const rawUserId = post.user.email;
  const userId = rawUserId.split("@")[0];
  const nickname = post.user.nickname;
  const rawLoginUser = localStorage.getItem("nickname");
  const loginUser = rawLoginUser.split('"')[1];

  const modDate = post.regDate.split("T")[0];
  const yearMonthDay = modDate.split("-", 3);
  const year = yearMonthDay[0];
  const month = yearMonthDay[1];
  const day = yearMonthDay[2];
  const writtenDate = year + "년 " + month + "월 " + day + "일";
  // let [post, setPost] = React.useState("");

  // const sameUser = nickname === loginUser ? true : false;
  const deletePost = () => {
    dispatch(postActions.deletePostMD(currentpostId));
  };

  return (
    <React.Fragment>
      <button
        onClick={() => {
          window.location.replace("/");
        }}
      >
        뒤로가기
      </button>
      <DetailBox>
        <h1>{title}</h1>
        <Info>
          <div>
            <UserName>{userId}</UserName>
            <Separator>·</Separator>
            <Time>{writtenDate}</Time>
          </div>
          {nickname == loginUser ? (
            <div>
              <button>수정</button>
              <button onClick={deletePost}>삭제</button>
            </div>
          ) : null}
        </Info>
        <Content>
          <div>
            <Viewer initialValue={content} height="1000px" />
            {/* <div dangerouslySetInnerHTML={{ __html: content }}></div> */}
          </div>
          <Writer>
            <Image src={"/img/profile.png"} />
            <div>{nickname}</div>
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
  /* div {
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
  } */
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
