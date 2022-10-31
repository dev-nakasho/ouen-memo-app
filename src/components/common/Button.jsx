import { useState } from "react";

export const Button = ({ title, disabled, clickHandler }) => {
  const [isHover, setIsHover] = useState(false);
  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <button
      disabled={disabled}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => {
        clickHandler();
        handleMouseLeave();
      }}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        color: "#bbb",
        backgroundColor: isHover ? "#eee" : "#fff",
        border: "none",
        borderRadius: "24px",
        padding: "4px 16px",
        cursor: disabled ? "not-allowed" : "pointer",
        fontSize: "16px",
      }}
    >
      {title}
    </button>
  );
};
