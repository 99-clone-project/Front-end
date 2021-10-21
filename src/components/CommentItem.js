import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { actionCreators as commentAction } from "../redux/modules/comment";

const CommentItem = (props) => {
  const { commentId, nickname, content, regdate } = props;
  const url = useSelector((state) => state.router);
  const postId = url.location.pathname.slice(8);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(commentAction.getCommentDB(postId));
  }, []);

  const handleDelete = () => {
    const result = window.confirm("댓글을 정말로 삭제하시겠습니까?");
    if (result) {
      dispatch(commentAction.getCommentDB(postId));
    }
  };

  return (
    <React.Fragment>
      <Container>
        <User>
          <UserInfo>
            <img src={"/img/profile.png"} />
            <div style={{ margin: "auto" }}>
              <UserName>{nickname}</UserName>
              <Time>{regdate}</Time>
            </div>
          </UserInfo>
          <Edit>
            <span onClick={() => {}}>수정</span>
            <span onClick={handleDelete}>삭제</span>
          </Edit>
        </User>
        <Content>{content}</Content>
        <PlusComment>
          <span>
            <i className="xi-plus-square-o"></i>
          </span>
          <span>답글 달기</span>
        </PlusComment>
      </Container>
    </React.Fragment>
  );
};

CommentItem.defaultProps = {
  commentId: 1,
  nickname: "닉네임입니다.",
  content: "댓글내용입니다.",
  regdate: "1시간 전",
};

const Container = styled.div`
  margin-top: 2.5rem;
  box-sizing: border-box;
  width: 100%;
  max-width: 768px;
  min-width: 452px;
  margin: auto;
  border-bottom: 1px solid rgb(233, 236, 239);
  padding: 1.5rem 0 1.5rem 0;
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
  margin: 1.5rem 0 0 0;
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

const PlusComment = styled.div`
  margin-top: 2rem;
  display: inline-flex;
  align-items: center;
  color: rgb(18, 184, 134);
  font-weight: bold;
  cursor: pointer;
  i {
    margin-right: 0.5rem;
  }
`;

export default CommentItem;
