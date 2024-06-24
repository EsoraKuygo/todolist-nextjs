"use client";

import { useToDo } from "../context/Contextt";
import styles from "./List.module.scss";

export default function List() {
  const { todos, removeTodo, updateTodo, setUpdatetaskid } = useToDo();

  const TododblClick = (id: string) => {
    removeTodo(id);
  };

  const Todoclick = (id: string, tache: string) => {
    updateTodo(id, tache);
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
            className={styles.li}
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
