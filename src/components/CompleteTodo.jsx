import React from "react";

export const CompleteTodo = (props) => {
  const { todos, onClickBack } = props;
  return (
    <div className="complete-area">
      <p className="title">完了のToDo</p>
      <ul>
        {todos.map((finalTodo, index) => {
          return (
            <div key={finalTodo} className="list-row">
              <li>{finalTodo}</li>
              <button onClick={() => onClickBack(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
