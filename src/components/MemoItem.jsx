import { Button } from "./common/Button";

export const MemoItem = ({
  id,
  title,
  text,
  registed,
  setTitle,
  setText,
  setMemoId,
  setMemoData,
}) => {
  // edit
  const clickMemoItem = () => {
    setTitle(title);
    setText(text);
    setMemoId(id);
  };

  // delete
  const clickDeleteHandler = () => {
    setMemoData((prevList) => {
      return prevList.filter((memoData) => memoData.id !== id);
    });
    setTitle("");
    setText("");
    setMemoId(0);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        height: "96px",
        fontSize: "14px",
        paddingLeft: "16px",
        paddingRight: "8px",
        boxSizing: "border-box",
        borderBottom: "1px solid #ddd",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <button
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "100%",
            border: "none",
            cursor: "pointer",
            backgroundColor: "#fff",
          }}
          onClick={() => clickMemoItem()}
        >
          <p style={{ fontSize: "16px", color: "#666" }}>{title}</p>
          <p style={{ color: "#888" }}>
            {text.length < 10 ? text : text.slice(0, 8) + " ・・・"}
          </p>
          <p style={{ fontSize: "12px", color: "#ccc" }}>{registed}</p>
        </button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button title="X" clickHandler={() => clickDeleteHandler()} />
      </div>
    </div>
  );
};
