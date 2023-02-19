import React from "react";

import { InputTodoForm } from "@/components/model/Todo";

import styles from "./Top.module.scss";

export const Top = () => {
  return (
    <main className={styles.main}>
      <InputTodoForm />
    </main>
  );
};
