"use client";

import React, { useState } from "react";
import { useToDo } from "../context/Contextt";

export default function AddToList() {
  const [task, setTask] = useState("");
  const { addTodo, updatetaskid, setUpdatetaskid, updateTodo } = useToDo();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (updatetaskid == undefined) {
      if (task.trim()) {
        await addTodo(task);
        setTask("");
      }
    } else {
      if (task.trim()) {
        updateTodo(updatetaskid, task);
        setTask("");
        setUpdatetaskid(undefined);
      }
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
        <button type="submit">{updatetaskid == undefined ? "add" : "update"}</button>
      </form>
    </div>
  );
}
