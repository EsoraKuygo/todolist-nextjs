"use client";

import Button from "./Button";
import styles from "./Header.module.scss";

export default function Header() {
  console.log("ici");
  return (
    <header className={styles.header}>
      <Button name="Home" href="/"></Button>
      <Button name="todolist" href="/todo"></Button>
      <Button name="Character sheet" href="/chara"></Button>
    </header>
  );
}
