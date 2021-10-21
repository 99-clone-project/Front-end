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
  // console.log(postList);

  React.useEffect(() => {
    dispatch(postActions.getPostMD());
  }, []);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Grid>
          {postList.map((post, index) => {
            return <Card post={post} index={index} key={index} />;
          })}
        </Grid>
      </div>
    </>
  );
};

const Grid = styled.div`
  /* width: 1055.97px; */
  margin: auto;
  display: grid;
  grid-template-columns: 320px 320px 320px 320px;
  /* grid-template-rows: 331.08px 331.08px 331.08px; */
  gap: 2rem;
  @media screen and (max-width: 1430px) {
    grid-template-columns: 320px 320px 320px;
  }
  @media screen and (max-width: 1030px) {
    grid-template-columns: 320px 320px;
  }
`;

export default PostList;
