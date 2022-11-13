import { MemoItem } from "./MemoItem";

export const Sidebar = ({ dispatch, memoList, setMemoList }) => {
  return (
    <div
      style={{
        width: "25%",
        height: "calc(100vh - 112px)",
        overflow: "scroll",
        overflowX: "hidden",
      }}
    >
      {memoList.map((memoData) => (
        <MemoItem
          key={memoData.id}
          id={memoData.id}
          title={memoData.title}
          text={memoData.text}
          registed={memoData.registed}
          setMemoList={setMemoList}
          dispatch={dispatch}
        />
      ))}
    </div>
  );
};
