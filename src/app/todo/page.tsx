// pages/index.tsx

import AddList from "../components/AddToList";
import CountList from "../components/CountList";
import List from "../components/List";
import { ToDoProvider } from "../context/Contextt";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main>
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
