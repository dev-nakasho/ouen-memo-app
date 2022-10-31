// import { Button } from "./common/Button";

export const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        borderBottom: "1px dotted #ddd",
        height: "56px",
        lineHeight: "56px",
        paddingLeft: "24px",
        paddingRight: "24px",
        boxSizing: "border-box",
      }}
    >
      <h3
        style={{
          color: "#999",
          fontWeight: "normal",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        Memo App
      </h3>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      ></div>
    </div>
  );
};
