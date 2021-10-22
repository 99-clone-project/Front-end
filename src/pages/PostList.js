import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Card from "../components/Card";
import { actionCreators as postActions } from "../redux/modules/post";

// React Icons
import { ImClock } from "react-icons/im";
import { BsGraphUp } from "react-icons/bs";
import { BiDotsVerticalRounded } from "react-icons/bi";

const PostList = () => {
  const dispatch = useDispatch();
  const postList = useSelector((state) => state.post.list);

  React.useEffect(() => {
    dispatch(postActions.getPostMD());
  }, []);

  return (
    <>
      <Wrapper>
        {/* 상단에 있는 트렌딩, 최신 버튼 */}
        <Button
          style={{ color: "#343a40" }}
          onClick={() => window.alert("힝 속았지~ 😎")}
        >
          <div
            style={{
              marginRight: "10px",
            }}
          />
          <BsGraphUp
            style={{
              width: "20px",
              height: "20px",
              marginRight: "10px",
            }}
          />
          <span style={{ width: "50px" }}>트렌딩</span>
        </Button>
        <Button style={{ color: "#343a40" }}>
          <div
            style={{
              marginRight: "10px",
            }}
          />
          <span
            style={{
              borderBottom: "2px solid black",
              width: "70px",
              padding: "5px",
            }}
          >
            <ImClock
              style={{
                width: "20px",
                height: "20px",
                marginBottom: "-5px",
                marginRight: "7px",
              }}
            />
            최신
          </span>
        </Button>
        <select
          style={{
            width: "95.99px",
            height: "32px",
            border: "1px solid #e5e5e5",
            marginLeft: "10px",
            padding: "0 5px",
          }}
        >
          <option value="오늘">오늘</option>
          <option selected value="이번 주">
            이번 주
          </option>
          <option value="이번 달">이번 달</option>
          <option value="올해">올해</option>
        </select>
        <HamDIv>
          <BiDotsVerticalRounded
            onClick={() => window.alert("힝 속았지~ 😎")}
            style={{
              width: "25px",
              height: "25px",
              marginBottom: "-5px",
              marginRight: "7px",
              cursor: "pointer",
            }}
          />
        </HamDIv>
      </Wrapper>
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

const Wrapper = styled.div`
  display: flex;
  width: 90%;
  margin: 0 auto;
  height: 60px;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5rem;
`;

const Button = styled.button`
  font-size: 18px;
  background-color: white;
  font-weight: 600;
  border: none;
  height: 48px;
  width: 120px;
  min-height: auto;
  min-width: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  ${(props) =>
    props.is_url
      ? `
  color: black;
  border-bottom: 2px solid black;
  `
      : `
  color: gray;
        `}
  :hover {
    cursor: pointer;
  }
`;

const HamDIv = styled.div`
  width: 90%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 15px;
  color: gray;
`;

const Grid = styled.div`
  /* width: 1055.97px; */
  margin: auto;
  display: grid;
  grid-template-columns: 320px 320px 320px 320px 320px;
  /* grid-template-rows: 331.08px 331.08px 331.08px; */
  gap: 2rem;
  @media screen and (max-width: 1800px) {
    grid-template-columns: 320px 320px 320px 320px;
  }
  @media screen and (max-width: 1430px) {
    grid-template-columns: 320px 320px 320px;
  }
  @media screen and (max-width: 1100px) {
    grid-template-columns: 320px 320px;
  }
`;

export default PostList;
