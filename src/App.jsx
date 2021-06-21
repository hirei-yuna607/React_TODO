import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const [completeTodo, setCompleteTodo] = useState([]);

  const onChangeTodoText = (e) => {
    setText(e.target.value);
  };
  const onClickAdd = () => {
    if (text === "") return;
    const newTodos = [...todos, text];
    setTodos(newTodos);
    setText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const onClickComplete = (index) => {
    const newCompleteDeleteTodos = [...todos];
    newCompleteDeleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodo, todos[index]];
    setTodos(newCompleteDeleteTodos);
    setCompleteTodo(newCompleteTodos);
  };

  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodo];
    newCompleteTodos.splice(index, 1);

    const newTodos = [...todos, completeTodo[index]];
    setCompleteTodo(newCompleteTodos);
    setTodos(newTodos);
  };

  return (
    <>
      <div className="input-area">
        <input
          placeholder="ToDoを入力"
          value={text}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のToDo</p>
        <ul>
          {todos.map((todo, index) => {
            return (
              //key設定を忘れずに(同じtodo)
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のToDo</p>
        <ul>
          {completeTodo.map((finalTodo, index) => {
            return (
              <div key={finalTodo} className="list-row">
                <li>{finalTodo}</li>
                <button onClick={() => onClickBack(index)}>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
