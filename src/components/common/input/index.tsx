"use client";
import classnames from "classnames";
import styles from "./index.module.css";
import { InputProps } from "./types";
import InfoIcon from "@/assets/icons/info.svg";

const Input = ({ className, label, id, helperText, error }: InputProps) => {
  return (
    <div
      className={classnames(
        styles.wrapper,
        {
          [styles["error-wrapper"]]: !!error,
        },
        className
      )}
    >
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <input
        className={styles.input}
        aria-describedby={!!helperText || !!error ? `${id}helperText` : ""}
      />
      {(!!helperText || !!error) && (
        <p id={`${id}-helper-text`} className={styles["helper-text"]}>
          <InfoIcon className={styles["helper-text-icon"]} />
          {helperText || error}
        </p>
      )}
    </div>
  );
};

export default Input;
