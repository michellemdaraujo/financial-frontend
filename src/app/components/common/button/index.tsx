"use client";
import classnames from "classnames";
import { ButtonProps } from "./types";
import styles from "./index.module.css";

const Button = ({ className, children, ...restProps }: ButtonProps) => {
  return (
    <button className={classnames(styles.button, className)} {...restProps}>
      {children}
    </button>
  );
};

export default Button;
