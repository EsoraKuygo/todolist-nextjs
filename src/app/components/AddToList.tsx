"use client";

import React, { useState } from "react";
import { useToDo } from "../context/Contextt";

export default function AddToList() {
  const [task, setTask] = useState("");
  const { addTodo } = useToDo();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (task.trim()) {
      await addTodo(task);

      setTask("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
