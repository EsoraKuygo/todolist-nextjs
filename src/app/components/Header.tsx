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
    <main className={styles.main}>
      <h1 className={styles.title}>Welcome to the Todo List App</h1>
    </main>
  );
}
