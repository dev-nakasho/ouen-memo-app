import { useState } from "react";

export const Button = ({
  title,
  disabled = false,
  clickHandler,
  buttonTextColor = "#bbb",
  isBorder = false,
}) => {
  const [isHover, setIsHover] = useState(false);
  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <div
      style={{
        paddingLeft: "4px",
        paddingRight: "4px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
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
          color: buttonTextColor, // #bbb, #999
          backgroundColor: isHover ? "#eee" : "#fff",
          border: isBorder ? "1px dotted #ddd" : "none",
          borderRadius: "24px",
          padding: "4px 16px",
          cursor: disabled ? "not-allowed" : "pointer",
          fontSize: "16px",
        }}
      >
        {title}
      </button>
    </div>
  );
};
