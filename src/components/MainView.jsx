import { Button } from "./common/Button";

export const MainView = ({
  // dispatch,
  title,
  setTitle,
  text,
  setText,
  memoId,
  setMemoId,
  setMemoData,
}) => {
  const getRegistDate = () => {
    // return "yyyy-mm"
    const date = new Date();
    return (
      String(date.getFullYear()) +
      "-" +
      ("0" + String(date.getMonth() + 1)).slice(-2) +
      "-" +
      String(date.getDate())
    );
  };

  const clickHandler = () => {
    if (memoId === 0) {
      setMemoData((prevList) => {
        return [
          ...prevList,
          {
            id: prevList.length + 1,
            title,
            text,
            registed: getRegistDate(),
          },
        ];
      });
    } else {
      setMemoData((prevList) => {
        return prevList.map((memoData) => {
          return memoData.id === memoId
            ? {
                ...memoData,
                title,
                text,
                registed: getRegistDate(),
              }
            : { ...memoData };
        });
      });
    }
    setTitle("");
    setText("");
    setMemoId(0);
  };

  const clickCancel = () => {
    setTitle("");
    setText("");
    setMemoId(0);
  };

  return (
    <>
      <div style={{ padding: "24px", width: "80%" }}>
        <div>
          <h3
            style={{
              color: "#999",
              fontWeight: "normal",
            }}
          >
            Title
          </h3>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{
              width: "100%",
              padding: "8px",
              boxSizing: "border-box",
              fontSize: "24px",
              border: "1px solid #ddd",
              fontWeight: "normal",
              color: "#777",
            }}
          />
        </div>
        <div style={{ paddingTop: "16px" }}>
          <h3
            style={{
              color: "#999",
              fontWeight: "normal",
            }}
          >
            Memo
          </h3>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            style={{
              width: "100%",
              height: "56vh",
              fontSize: "24px",
              border: "1px solid #ddd",
              padding: "8px",
              boxSizing: "border-box",
              fontWeight: "normal",
              color: "#777",
            }}
          ></textarea>
        </div>
        <div
          style={{
            display: "flex",
            height: "48px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Button title="キャンセル" clickHandler={() => clickCancel()} />
          </div>
          <div
            style={{
              paddingRight: "8px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Button
              title={memoId === 0 ? "保存" : "更新"}
              disabled={title === "" || text === ""}
              clickHandler={() => clickHandler()}
            />
          </div>
        </div>
      </div>
    </>
  );
};
