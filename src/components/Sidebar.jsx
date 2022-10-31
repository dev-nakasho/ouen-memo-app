import MemoItem from "./MemoItem";
import { connect } from "react-redux";

const Sidebar = ({ memoData, setTitle, setText, setMemoId }) => {
  return (
    <div
      style={{
        borderRight: "1px solid #ddd",
        width: "20%",
        height: "calc(100vh - 112px)",
        overflow: "scroll",
      }}
    >
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
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { memoData: [...state.memoData] };
};

export default connect(mapStateToProps)(Sidebar);
