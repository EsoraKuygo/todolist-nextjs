"use client";

import { ReactNode, createContext, useContext, useEffect, useState } from "react";

// Creation of ToDoTache interface
interface ToDoTache {
  todos: ToDoDTO[];
  addTodo: (task: string) => void;
  removeTodo: (id: string) => void;
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
  const [todos, setTodos] = useState<ToDoDTO[]>([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/todo");
        console.log("yes");
        if (response.ok) {
          const data = await response.json();
          setTodos(data);
        } else {
          console.error("Failed to fetch todos");
        }
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };

    fetchTodos();
  }, []);

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  // Function to add a new todo to the list
  const addTodo = async (tache: string) => {
    try {
      const response = await fetch("http://localhost:3000/api/todo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ tache }),
      });
      if (response.ok) {
        const newTodo = await response.json();
        setTodos((prevTodos) => [...prevTodos, newTodo]);
      } else {
        console.error("Failed to add todo");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  //function to remove to do off the list
  const removeTodo = async (id: string) => {
    try {
      const response = await fetch(`http://localhost:3000/api/todo`, {
        method: "DELETE",
        body: JSON.stringify({
          id,
        }),
      });

      if (response.ok) {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
      } else {
        console.error("Failed to delete todo");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return <ToDoContext.Provider value={{ todos, addTodo, removeTodo }}>{children}</ToDoContext.Provider>;
}
