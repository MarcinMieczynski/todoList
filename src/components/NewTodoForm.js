import React from "react";
import "./NewTodoForm.css";

const NewTodoForm = props => {
  return (
    <form onSubmit={props.formSubmitted}>
      <input
        className="input_NewTodoForm"
        placeholder="Dodaj zadanie"
        onChange={props.newTodoChanged}
        id="newTodo"
        name="newTodo"
        value={props.newTodo}
      />
      <button className="button_NewTodoForm" type="submit">
        Dodaj
      </button>
    </form>
  );
};

export default NewTodoForm;
