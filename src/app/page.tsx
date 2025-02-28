import { useCallback } from "react";
import Button from "./components/common/button";
import styles from "./page.module.css";
import LoginForm from "./login-form";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className="">
          <LoginForm className={styles["form-wrapper"]} />
        </div>
      </main>
    </div>
  );
}
