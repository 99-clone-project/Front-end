import React from "react";
import CommentItem from "./CommentItem";
import { useSelector } from "react-redux";

const CommentList = (props) => {
  const commentList = useSelector((state) => state.comment.commentList);
  return (
    <React.Fragment>
      {commentList.map((item) => {
        return <CommentItem {...item} />;
      })}
    </React.Fragment>
  );
};

export default CommentList;
