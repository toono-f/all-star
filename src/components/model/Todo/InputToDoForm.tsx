import { useState } from "react";

import supabase from "@/utils/supabase";

import { useAddTodo } from "./useAddTodo";

export const InputTodoForm = () => {
  const [title, setTitle] = useState("");
  const { todos, fetchTodos } = useAddTodo();

  const pushTodo = async (e: any) => {
    e.preventDefault();
    await supabase.from("todos").insert({ title });
    fetchTodos();
    setTitle("");
  };

  return (
    <>
      <form onSubmit={pushTodo}>
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <button>追加</button>
      </form>
      <div>TODOリスト</div>
      {todos?.map((todo: any) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </>
  );
};
