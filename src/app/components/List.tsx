"use client";

import { useToDo } from "../context/Contextt";
import styles from "./List.module.scss";

export default function List() {
  const { todos, removeTodo, setUpdatetaskid, selectedId, setSelectedId } = useToDo();

  const TododblClick = (id: string) => {
    removeTodo(id);
  };

  const Todoclick = (id: string, tache: string) => {
    setSelectedId(id);
    setUpdatetaskid(id);
    console.log(id, tache);
  };

  return (
    <div className={styles.toDoListContainer}>
      <h2 className={styles.todoListTitle}>To-Do List</h2>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`${styles.li} ${selectedId === todo.id ? styles.selected : ""}`}
            onDoubleClick={() => TododblClick(todo.id)}
            onClick={() => Todoclick(todo.id, todo.tache)}
          >
            <p>{todo.tache}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
