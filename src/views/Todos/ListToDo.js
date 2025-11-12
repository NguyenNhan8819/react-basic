import React from "react";
import AddToDo from "./AddToDo";

class ListToDo extends React.Component {
  state = {
    todos: [
      { id: "todo1", title: "Learn React" },
      { id: "todo2", title: "Build a Todo App" },
      { id: "todo3", title: "Master JavaScript" },
    ],
  };
  handleAddNewTodo = (todo) => {
    this.setState({
      todos: [...this.state.todos, todo],
    });
  };
  render() {
    const { todos } = this.state;
    return (
      <>
        <AddToDo addNewTodo={this.handleAddNewTodo} />
        <ul>
          {todos.map((item, index) => {
            return (
              <div className="todoItem" key={item.id}>
                <span className=" todoText">
                  {index + 1} {"."}
                  {item.title}
                </span>
                <span className="deleteButton">
                  <button className="deleteButton">Delete</button>
                </span>
                <span className="editButton">
                  <button>Edit</button>
                </span>
              </div>
            );
          })}
        </ul>
      </>
    );
  }
}

export default ListToDo;
