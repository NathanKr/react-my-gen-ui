import { ButtonHTMLAttributes, FC } from "react";
import styles from "../../styles/button.module.css";

const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  return (
    <button className={styles.container} {...props}>
      {props.children}
    </button>
  );
};

export default Button;
