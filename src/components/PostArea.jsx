import { Button } from "./common/Button";
import styles from "./PostArea.module.scss";

export const PostArea = ({
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
      <div className={styles.postArea}>
        <div className={styles.titleWrapper}>
          <h3 className={styles.title}>Title</h3>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={styles.input}
          />
        </div>
        <div className={styles.textAreaWrapper}>
          <h3 className={styles.title}>Memo</h3>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            className={styles.textarea}
          ></textarea>
        </div>
        <div className={styles.buttonWrapper}>
          <div className={styles.cancelButton}>
            <Button title="キャンセル" clickHandler={() => clickCancel()} />
          </div>
          <div className={styles.saveButton}>
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
