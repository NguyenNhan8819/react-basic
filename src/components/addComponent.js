import React from "react";

class AddComponent extends React.Component {
  state = {
    title: "",
    salary: "",
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    if (!this.state.title || !this.state.salary) {
      alert("Missing required params");
      return;
    }
    this.props.addNewJob({
      id: Math.floor(Math.random() * 1000),
      title: this.state.title,
      salary: this.state.salary,
    });
  };
  render() {
    const { title, salary } = this.state;
    return (
      <>
        <form>
          <label>Job's title: </label> <br />
          <input
            type="text"
            value={title}
            onChange={(e) => this.setState({ title: e.target.value })}
          />
          <br />
          <label>Salary: </label> <br />
          <input
            type="text"
            value={salary}
            onChange={(e) => this.setState({ salary: e.target.value })}
          />
          <br />
          <input
            type="submit"
            value="Submit"
            onClick={(e) => this.handleSubmit(e)}
          />
        </form>
      </>
    );
  }
}

export default AddComponent;
