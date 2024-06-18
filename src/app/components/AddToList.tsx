"use client";

import React, { useState } from "react";
// import styles from "./Ad";
import { useToDo } from "../context/Contextt";

export default function AddToList() {
  const [task, setTask] = useState("");
  const { addTodo } = useToDo();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (task.trim()) {
      addTodo(task);
      setTask("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={task} onChange={(e) => setTask(e.target.value)}></input>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
