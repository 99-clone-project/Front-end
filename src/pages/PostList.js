import React, { useEffect, useState } from "react";
import { history } from "../redux/configureStore";

import styled from "styled-components";
import Card from "../components/Card";
// import Grid from "../elements/Grid";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";

const PostList = () => {
  const dispatch = useDispatch();
  const postList = useSelector((state) => state.post.list);
  // console.log("스테이트.포스트.리스트", postList);
  // console.log(postList);

  React.useEffect(() => {
    dispatch(postActions.getPostMD());
  }, []);

  return (
    <>
      HEADER
      <button
        onClick={() => {
          history.push("/postwrite");
        }}
      >
        작성하기
      </button>
      <Grid>
        {postList.map((post, index) => {
          return <Card post={post} index={index} key={index} />;
        })}
      </Grid>
    </>
  );
};

const Grid = styled.div`
  width: 1055.97px;
  margin: auto;
  display: grid;
  grid-template-columns: 320px 320px 320px;
  /* grid-template-rows: 331.08px 331.08px 331.08px; */
  gap: 30px;
`;

export default PostList;
