import { useEffect, useState } from "react";

import supabase from "@/utils/supabase";

export const useAddTodo = () => {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    const datas: any = await supabase.from("todos").select("*");
    setTodos(datas.data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return { todos, fetchTodos };
};
