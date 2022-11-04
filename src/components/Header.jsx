export const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        borderBottom: "1px dotted #ddd",
        height: "56px",
        lineHeight: "56px",
        paddingLeft: "16px",
        boxSizing: "border-box",
      }}
    >
      <h3 style={{ color: "#999" }}>Memo App</h3>
    </div>
  );
};
