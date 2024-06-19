"use client";
import { useToDo } from "../context/Contextt";
import styles from "./List.module.scss";

export default function List() {
  const { todos, removeTodo } = useToDo();
  const TodoClick = (id: number) => {
    removeTodo(id);
  };
  return (
    <div className={styles.toDoListContainer}>
      <h2 className={styles.todoListTitle}>To-Do List</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className={styles.li} onClick={() => TodoClick(todo.id)}>
            <p>{todo.tache}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
