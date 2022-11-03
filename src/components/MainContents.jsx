import { useReducer, useState } from "react";
import { MainView } from "./MainView";
import { initialState, memoReducer } from "./reducer/memoReducer";
import { Sidebar } from "./Sidebar";

export const MainContents = () => {
  const [memoId, setMemoId] = useState(0);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [state, dispatch] = useReducer(memoReducer, initialState);

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        height: "100vh",
      }}
    >
      <Sidebar
        setTitle={setTitle}
        setText={setText}
        setMemoId={setMemoId}
        state={state}
        dispatch={dispatch}
      />
      <MainView
        title={title}
        setTitle={setTitle}
        text={text}
        setText={setText}
        memoId={memoId}
        setMemoId={setMemoId}
        dispatch={dispatch}
      />
    </div>
  );
};
