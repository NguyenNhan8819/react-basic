import React from "react";
import "../../styles/AddToDo.scss";
import { toast } from "react-toastify";

class AddToDo extends React.Component {
  state = {
    title: "",
  };
  handleChangeTitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  };
  handleAddTodo = () => {
    if (!this.state.title) {
      toast.error("Title is required");
      return;
    }
    let todo = {
      id: Math.floor(Math.random() * 1001),
      title: this.state.title,
    };
    this.props.addNewTodo(todo);
    this.setState({
      title: "",
    });
    toast.success("Todo added successfully!");
  };
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.title}
          onChange={(event) => this.handleChangeTitle(event)}
        />
        <span className="addButton">
          <button type="button" onClick={() => this.handleAddTodo()}>
            Add
          </button>
        </span>
      </div>
    );
  }
}
export default AddToDo;
