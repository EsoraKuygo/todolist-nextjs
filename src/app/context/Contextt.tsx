"use client";

import { ReactNode, createContext, useContext, useState } from "react";

// Creation of ToDo interface
interface ToDo {
  id: number;
  tache: string;
}

// Creation of ToDoTache interface
interface ToDoTache {
  todos: ToDo[];
  addTodo: (task: string) => void;
  removeTodo: (id: number) => void;
}

// Creation of context
const ToDoContext = createContext<ToDoTache | undefined>(undefined);

// Custom hook to use ToDo context
export const useToDo = () => {
  const context = useContext(ToDoContext);
  if (!context) {
    throw new Error("useToDo must be used within a ToDoProvider");
  }
  return context;
};

// Provider component
export function ToDoProvider({ children }: { children: ReactNode }) {
  const [todos, setTodos] = useState<ToDo[]>([]);

  // Function to add a new todo to the list
  const addTodo = (tache: string) => {
    const newTodo = { id: Date.now(), tache };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const removeTodo = (id:number) => {
    setTodos((prevTodos)=> prevTodos.filter(todo => todo.id !== id));
  }

  return <ToDoContext.Provider value={{ todos, addTodo, removeTodo }}>{children}</ToDoContext.Provider>;
}
