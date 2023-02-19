import { PostgrestSingleResponse } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

import { supabase } from "@/utils/supabase";

export type Data = {
  id: number;
  title: string;
};

export const useAddTodo = () => {
  const [todos, setTodos] = useState<Array<Data>>([]);

  const fetchTodos = async () => {
    const datas: PostgrestSingleResponse<Array<Data>> = await supabase
      .from("todos")
      .select("*");
    if (datas.data) setTodos(datas.data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return { todos, fetchTodos };
};
