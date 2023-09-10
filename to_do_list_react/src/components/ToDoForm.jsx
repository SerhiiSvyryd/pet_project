import React, { useState } from "react";

export const ToDoForm = ({ addToDo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addToDo(value);
    console.log(value);

    setValue("");
  };

  return (
    <form className="ToDoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        value={value}
        placeholder="Яку задачу потрібно виконати сьогодні?"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        Додати задачу
      </button>
    </form>
  );
};
