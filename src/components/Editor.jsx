import { Button } from "./common/Button";

export const MainView = ({ state, dispatch, setMemoData }) => {
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
    if (state.memoId === 0) {
      setMemoData((prevList) => {
        return [
          ...prevList,
          {
            id: prevList.length + 1,
            title: state.title,
            text: state.text,
            registed: getRegistDate(),
          },
        ];
      });
    } else {
      setMemoData((prevList) => {
        return prevList.map((memoData) => {
          return memoData.id === state.memoId
            ? {
                ...memoData,
                title: state.title,
                text: state.text,
                registed: getRegistDate(),
              }
            : { ...memoData };
        });
      });
    }
    dispatch({ type: "CLEAR_DATA" });
  };

  const clickCancel = () => dispatch({ type: "CLEAR_DATA" });

  return (
    <>
      <div style={{ padding: "24px", width: "80%" }}>
        {/* title */}
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
            value={state.title}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_TITLE",
                payload: { title: e.target.value },
              })
            }
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

        {/* textarea */}
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
            value={state.text}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_TEXT",
                payload: { text: e.target.value },
              })
            }
            style={{
              color: "#777",
              fontWeight: "normal",
              fontSize: "24px",
              border: "1px solid #ddd",
              padding: "8px",
              width: "100%",
              height: "56vh",
              boxSizing: "border-box",
            }}
          ></textarea>
        </div>

        {/* handle button */}
        <div
          style={{
            display: "flex",
            height: "56px",
          }}
        >
          <Button
            title="キャンセル"
            clickHandler={() => clickCancel()}
            buttonTextColor="#999"
            isBorder={true}
          />
          <Button
            title={state.memoId === 0 ? "保存" : "更新"}
            disabled={state.title === "" || state.text === ""}
            clickHandler={() => clickHandler()}
            buttonTextColor="#999"
            isBorder={true}
          />
        </div>
      </div>
    </>
  );
};
