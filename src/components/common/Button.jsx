import styles from "./Button.module.scss";

export const Button = ({ title, disabled, clickHandler }) => {
  return (
    <button
      disabled={disabled}
      onClick={() => clickHandler()}
      className={disabled ? styles["button-isDisabled"] : styles.button}
    >
      {title}
    </button>
  );
};
