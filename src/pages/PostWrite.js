import { React, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import post, { actionCreators as postActions } from "../redux/modules/post";
import { history } from "../redux/configureStore";
// import Writer from "../components/ToastUiEditor";

// import "codemirror/lib/codemirror.css";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";

const PostWrite = () => {
  const dispatch = useDispatch();
  const contentRef = useRef();
  const [title, setTitle] = useState("");
  const [preview, setPreview] = useState("");

  // console.log(localStorage.getItem("nickname"));

  const titleChange = (e) => {
    setTitle(e.target.value);
  };
  // console.log(useSelector((state) => state));

  const addPost = () => {
    const contentHTML = contentRef.current.getInstance().getHTML();
    // console.log("contentHTML", contentHTML);
    const contentMarkdown = contentRef.current.getInstance().getMarkdown();
    // console.log("contentMarkdown", contentMarkdown);
    console.log(contentMarkdown.replaceAll("#", ""));

    const post = {
      title: title,
      content: contentMarkdown,
      // user: {
      //   // nickname: nickname,
      // },
    };
    dispatch(postActions.addPostMD(post));
    // history.replace("/");
  };

  return (
    <>
      <Wrap>
        <Head>
          <TitleInput
            placeholder="제목을 입력하세요"
            onChange={titleChange}
            // value={title}
          />
        </Head>
        <Body>
          <Editor
            ref={contentRef}
            previewStyle="vertical"
            width="100%"
            height="600px"
            initialEditType="markdown"
            useCommandShortcut={true}
            placeholder="당신의 이야기를 적어보세요"
            previewHighlight={false}

            // initialValue="당신의 이야기를"
          />
        </Body>
        <Footer>
          <ExitBtn
            onClick={() => {
              history.push("/");
            }}
          >
            나가기
          </ExitBtn>
          <SubmitBtn onClick={addPost}>출간하기</SubmitBtn>
        </Footer>
      </Wrap>
    </>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* width: 711.11px; */
  width: 100vw;
  height: 90vh;
  margin: auto;
  border: 1px solid black;
`;
const Head = styled.div`
  width: 100vw;
  /* height: 156.056px; */
  /* padding: 32px 48px 0; */
`;
const TitleInput = styled.input`
  width: 100vw;
  height: 156.056px;
  border: none;
  font-size: 40px;
  font-weight: bold;
`;
const Body = styled.div`
  width: 100vw;
  padding: 0 48px;
`;
const TextArea = styled.textarea`
  width: 100vw;
  height: 500px;
`;
const Footer = styled.div`
  position: fixed;
  width: 50vw;

  bottom: 0;
  /* left: 0; */

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 678.99px;
  height: 63.993px;
  padding: 0 16px;

  box-shadow: 3px 3px 15px 1px #9e9e9e;
  /* z-index: 100; */
  background-color: #fff;
`;
const ExitBtn = styled.button`
  width: 82.257px;
  height: 40px;
  padding: 0 20px;
`;
const SubmitBtn = styled.button`
  width: 82.257px;
  height: 40px;
  padding: 0 20px;
`;
export default PostWrite;
