import { useState } from "react";
import MainView from "./MainView";
import Sidebar from "./Sidebar";

export const MainContents = () => {
  const [memoId, setMemoId] = useState(0);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        height: "100vh",
      }}
    >
      <Sidebar setTitle={setTitle} setText={setText} setMemoId={setMemoId} />
      <MainView
        title={title}
        setTitle={setTitle}
        text={text}
        setText={setText}
        memoId={memoId}
        setMemoId={setMemoId}
      />
    </div>
  );
};
