"use client";

import { useToDo } from "../context/Contextt";
import styles from "./CountList.module.scss";

export default function CountList() {
  const { todos } = useToDo();
  const nombre = todos.length;

  return (
    <div>
      <h2 className={styles.todoListTitle}> Compte total : {nombre} </h2>
    </div>
  );
}
