import React from "react";
import "./TodoItem.css";

const TodoItem = props => {
  const { todo, index } = props;
  return (
    <li className="li_TodoItem">
      <input
        className="input_TodoItem"
        onChange={event => props.toggleTodoDone(event, index)}
        type="checkbox"
        checked={todo.done}
      />
      <span
        style={{
          textDecoration: todo.done ? "line-through" : "inherit"
        }}
      >
        {todo.title}
      </span>

      <button
        className="button_TodoItem"
        onClick={() => props.removeTodo(index)}
      >
        X
      </button>
    </li>
  );
};
export default TodoItem;
