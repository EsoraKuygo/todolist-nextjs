"use client";
import { useToDo } from "../context/Contextt";
import styles from "./List.module.scss";

export default function List() {
  const { todos } = useToDo();
  return (
    <div className={styles.toDoListContainer}>
      <h2 className={styles.todoListTitle}>To-Do List</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.tache}</li>
        ))}
      </ul>
    </div>
  );
}
