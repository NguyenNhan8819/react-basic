import React from "react";
import AddToDo from "./AddToDo";
import { toast } from "react-toastify";

class ListToDo extends React.Component {
  state = {
    todos: [
      { id: "todo1", title: "Learn React" },
      { id: "todo2", title: "Build a Todo App" },
      { id: "todo3", title: "Master JavaScript" },
    ],
    editTodo: {},
  };
  handleAddNewTodo = (todo) => {
    this.setState({
      todos: [...this.state.todos, todo],
    });
  };
  handleDeleteTodo = (todo) => {
    let currentTodos = this.state.todos;
    currentTodos = currentTodos.filter((item) => item.id !== todo.id);
    this.setState({
      todos: currentTodos,
    });
    toast.success("Todo delete successfully!");
  };
  handleEditTodo = (todo) => {
    // save
    let { editTodo, todos } = this.state;
    let isEmptyObj = Object.keys(editTodo).length === 0;
    if (isEmptyObj === false && editTodo.id === todo.id) {
      let todosCopy = [...todos];
      let objIndex = todosCopy.findIndex((item) => item.id === todo.id);
      todosCopy[objIndex].title = editTodo.title;
      this.setState({
        todos: todosCopy,
        editTodo: {},
      });
      toast.success("Update todo successfully!");
      return;
    }
    // edit
    this.setState({
      editTodo: todo,
    });
  };
  handleOnchangeEditTodo = (e) => {
    let editTodoCopy = { ...this.state.editTodo };
    editTodoCopy.title = e.target.value;
    this.setState({
      editTodo: editTodoCopy,
    });
  };
  render() {
    const { todos, editTodo } = this.state;
    let isEmptyObj = Object.keys(editTodo).length === 0;
    console.log(">>> check empty obj: ", isEmptyObj);
    return (
      <>
        <AddToDo addNewTodo={this.handleAddNewTodo} />
        <ul>
          {todos.map((item, index) => {
            return (
              <div className="todoItem" key={item.id}>
                <span className=" todoText"></span>
                {isEmptyObj === true ? (
                  <span>
                    {index + 1} . {item.title}
                  </span>
                ) : item.id === editTodo.id ? (
                  <span>
                    {index + 1} .{" "}
                    <input
                      value={editTodo.title}
                      onChange={(e) => this.handleOnchangeEditTodo(e)}
                    />
                  </span>
                ) : (
                  <span>
                    {index + 1} . {item.title}
                  </span>
                )}

                <span className="editButton">
                  <button onClick={() => this.handleEditTodo(item)}>
                    {isEmptyObj === true
                      ? "Edit"
                      : item.id === editTodo.id
                      ? "Save"
                      : "Edit"}
                  </button>
                </span>
                <span className="deleteButton">
                  <button
                    className="deleteButton"
                    onClick={() => this.handleDeleteTodo(item)}
                  >
                    Delete
                  </button>
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
