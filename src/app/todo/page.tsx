// pages/index.tsx

import AddList from "../components/AddToList";
import CountList from "../components/CountList";
import List from "../components/List";
import { ToDoProvider } from "../context/Contextt";
import styles from "./page.module.scss";
import styles from "../components/Footer.module.scss";

export default function Home() {
  console.log("Home page rendered");
  return (
    <main>
      <Header />
      <Footer />
      <h2 className={styles.subtitle}>To-Do List Application</h2>
      <p className={styles.description}>
        This application allows you to manage your to-do list efficiently. You can add, update, and remove tasks easily.
      </p>
      <p className={styles.note}> Note: Double-click a task to remove it.</p>
      <p className={styles.note}> Click a task to update it.</p>
      <p className={styles.note}> Use the input field to add or update tasks.</p>
      <p className={styles.note}> The update button will appear when you select a task to update.</p>
      <p className={styles.note}> The add button will hide when you select a task to update.</p>
      <p className={styles.note}> The update form will appear when you select a task to update.</p>
      <p className={styles.note}> The add form will hide when you select a task to update.</p>
      <div className={styles.pageContainer}>
        <ToDoProvider>
          <CountList />
          <br />
          <br />
          <List />
          <br />
          <br />
          <AddList />
        </ToDoProvider>
      </div>
    </main>
  );
}
