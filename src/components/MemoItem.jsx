import { Button } from "./common/Button";

export const MemoItem = ({
  id,
  title,
  text,
  registed,
  setMemoData,
  dispatch,
}) => {
  // edit
  const clickMemoItem = () =>
    dispatch({ type: "UPDATE_MEMO", payload: { memoId: id, title, text } });

  // delete
  const clickDeleteHandler = () => {
    setMemoData((prevList) => {
      return prevList.filter((memoData) => memoData.id !== id);
    });
    dispatch({ type: "CLEAR_DATA" });
  };

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "96px",
        fontSize: "14px",
        paddingLeft: "16px",
        boxSizing: "border-box",
        borderBottom: "1px solid #ddd",
      }}
    >
      <div style={{ width: "100%" }}>
        <button
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            border: "none",
            cursor: "pointer",
            backgroundColor: "#fff",
          }}
          onClick={() => clickMemoItem()}
        >
          {/* title */}
          <p style={{ fontSize: "16px", color: "#666", lineHeight: "2em" }}>
            {title.length < 10 ? title : title.slice(0, 9) + "・・・"}
          </p>
          {/* registed */}
          <p style={{ fontSize: "12px", color: "#ccc", lineHeight: "2em" }}>
            {registed}
          </p>
        </button>
      </div>
      <Button title="X" clickHandler={() => clickDeleteHandler()} />
    </div>
  );
};
