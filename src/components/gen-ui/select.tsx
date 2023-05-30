import { FC, SelectHTMLAttributes } from "react";
import styles from "../../styles/select.module.css";

const Select: FC<SelectHTMLAttributes<HTMLSelectElement>> = (props) => {
  return (
    <select className={styles.container} {...props}>
      {props.children}
    </select>
  );
};

export default Select;
