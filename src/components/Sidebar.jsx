import { MemoItem } from "./MemoItem";
import styles from "./Sidebar.module.scss";

export const Sidebar = ({
  memoData,
  setTitle,
  setText,
  setMemoId,
  setMemoData,
}) => {
  return (
    <div className={styles.sidebar}>
      {memoData.map((memo) => (
        <MemoItem
          key={memo.id}
          id={memo.id}
          title={memo.title}
          text={memo.text}
          registed={memo.registed}
          setTitle={setTitle}
          setText={setText}
          setMemoId={setMemoId}
          setMemoData={setMemoData}
        />
      ))}
    </div>
  );
};
