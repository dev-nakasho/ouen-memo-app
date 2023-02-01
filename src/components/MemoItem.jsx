import { Button } from "./common/Button";
import styles from "./MemoItem.module.scss";

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
    <div className={styles.memoItem}>
      <div className={styles.buttonWrapper}>
        <button className={styles.selectButton} onClick={() => clickMemoItem()}>
          <p className={styles.memoTitle}>
            {title.length < 10 ? title : title.slice(0, 8) + " ・・・"}
          </p>
          <p className={styles.memoText}>
            {text.length < 10 ? text : text.slice(0, 8) + " ・・・"}
          </p>
          <p className={styles.memoRegisted}>{registed}</p>
        </button>
      </div>
      <div className={styles.deleteButtonWrapper}>
        <Button title="X" clickHandler={() => clickDeleteHandler()} />
      </div>
    </div>
  );
};
