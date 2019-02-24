import React, { Component } from "react";
import NewTodoForm from "./components/NewTodoForm";
import TodoList from "./components/TodoList";
import "./App.css";

class App extends Component {
  state = {
    message: "Lista zadań",
    newTodo: "",
    todos: [
      {
        title: "Nauka React",
        done: false
      },
      {
        title: "Nauka angielskiego",
        done: false
      }
    ]
  };

  newTodoChanged = event => {
    this.setState({
      newTodo: event.target.value
    });
  };

  formSubmitted = event => {
    event.preventDefault();
    if (event.target.value === "") return alert("wwwwwww");

    this.setState({
      newTodo: "",
      todos: [
        ...this.state.todos,
        {
          title: this.state.newTodo,
          done: false
        }
      ]
    });
  };

  toggleTodoDone = (event, index) => {
    const todos = [...this.state.todos];
    todos[index] = {
      ...todos[index],
      done: event.target.checked
    };
    this.setState({
      todos
    });
  };

  removeTodo = index => {
    const todos = [...this.state.todos];
    todos.splice(index, 1);

    this.setState({
      todos
    });
  };

  allDone() {
    const todos = this.state.todos.map(todo => {
      return {
        title: todo.title,
        done: true
      };
    });

    this.setState({
      todos
    });
  }

  render() {
    return (
      <div className="App">
        <h3 className="h3_App">{this.state.message}</h3>
        <NewTodoForm
          newTodo={this.state.newTodo}
          formSubmitted={this.formSubmitted}
          newTodoChanged={this.newTodoChanged}
        />
        <button className="button_App" onClick={() => this.allDone()}>
          Wszystkie wykonane
        </button>
        <TodoList
          todos={this.state.todos}
          toggleTodoDone={this.toggleTodoDone}
          removeTodo={this.removeTodo}
        />
      </div>
    );
  }
}

export default App;
