// import "codemirror/lib/codemirror.css";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import { React, useRef, useState } from "react";

const Writer = () => {
  const editorRef = useRef();
  const onChangeEditorTextHandler = () => {
    console.log(editorRef.current.getInstance().getHTML());
    console.log(editorRef.current.getInstance().getMarkdown());
  };

  return (
    <>
      {/* <button onClick={click}>button</button> */}

      <Editor
        // onChange={changeInput}
        ref={editorRef}
        // initialValue="당신의 이야기를"
        previewStyle="vertical"
        width="100%"
        height="600px"
        initialEditType="markdown"
        useCommandShortcut={true}
        placeholder="당신의 이야기를 적어보세요"
        onChange={onChangeEditorTextHandler}
        // value={content}
      />
    </>
  );
};

export default Writer;
