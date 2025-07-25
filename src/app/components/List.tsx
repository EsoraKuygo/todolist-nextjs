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
    const inputElement = document.querySelector<HTMLInputElement>("#inputTodo");
    if (inputElement) {
      inputElement.value = tache;
    }
    const buttonElement = document.querySelector<HTMLButtonElement>("#buttonUpdate");
    if (buttonElement) {
      buttonElement.style.display = "block";
    }
    const addButtonElement = document.querySelector<HTMLButtonElement>("#buttonAdd");
    if (addButtonElement) {
      addButtonElement.style.display = "none";
    }
    const formElement = document.querySelector<HTMLFormElement>("#formTodo");
    if (formElement) {
      formElement.style.display = "none";
    }
    const updateFormElement = document.querySelector<HTMLFormElement>("#formUpdateTodo");
    if (updateFormElement) {
      updateFormElement.style.display = "block";
    }   
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
