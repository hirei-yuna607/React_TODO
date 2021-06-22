import React, { useState } from "react";
import { InputTodo } from "./components/InputTodo";
import { UncompleteTodo } from "./components/UncompleteTodo";
import { CompleteTodo } from "./components/CompleteTodo";
import "./styles.css";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [uncompleteTodos, setUncompleteTodos] = useState([]);
  const [completeTodo, setCompleteTodo] = useState([]);

  const onChangeTodoText = (e) => {
    setTodoText(e.target.value);
  };
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...uncompleteTodos, todoText];
    setUncompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...uncompleteTodos];
    newTodos.splice(index, 1);
    setUncompleteTodos(newTodos);
  };

  const onClickComplete = (index) => {
    const newCompleteDeleteTodos = [...uncompleteTodos];
    newCompleteDeleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodo, uncompleteTodos[index]];
    setUncompleteTodos(newCompleteDeleteTodos);
    setCompleteTodo(newCompleteTodos);
  };

  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodo];
    newCompleteTodos.splice(index, 1);

    const newTodos = [...uncompleteTodos, completeTodo[index]];
    setCompleteTodo(newCompleteTodos);
    setUncompleteTodos(newTodos);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disable={uncompleteTodos.length >= 5}
      />
      {uncompleteTodos.length >= 5 && (
        <p style={{ color: "#ff0000" }}>登録は5個まで</p>
      )}
      <UncompleteTodo
        todos={uncompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodo todos={completeTodo} onClickBack={onClickBack} />
    </>
  );
};
