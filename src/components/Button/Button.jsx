import styles from "./Button.module.css";

const Button = ({ onClick }) => {
  return (
    <button type="button" className={styles.Button} onClick={onClick}>
      <span>Loade more</span>
    </button>
  );
};

export default Button;
