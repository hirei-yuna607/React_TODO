import React from "react";

export const InputTodo = (props) => {
  const { todoText, onChange, onClick, disable } = props;
  return (
    <div className="input-area">
      <input
        disabled={disable}
        placeholder="ToDoを入力"
        value={todoText}
        onChange={onChange}
      />
      <button disabled={disable} onClick={onClick}>
        追加
      </button>
    </div>
  );
};
