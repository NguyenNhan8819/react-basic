import react from "react";
import ChildComponent from "./childComponent";

class MyComponent extends react.Component {
  // let name = "My Component";
  state = {
    firstName: "",
    lastName: "",
    arrJobs: [
      { id: "job1", title: "Developer", salary: "600" },
      { id: "job2", title: "Tester", salary: "400" },
      { id: "job3", title: "Project Manager", salary: "1000" },
    ],
  };

  render() {
    const { firstName, lastName, arrJobs } = this.state;
    return (
      <>
        <form>
          <label>First Name: </label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => this.setState({ firstName: e.target.value })}
          />
          <br />
          <label>Last Name: </label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => this.setState({ lastName: e.target.value })}
          />
          <br />
          <input
            type="submit"
            value="Submit"
            onClick={(e) => {
              alert("Bạn đã click");
              e.preventDefault();
              console.log(this.state);
            }}
          />
        </form>
        <h1>
          Hello {this.state.firstName} {this.state.lastName}
        </h1>
        <ChildComponent arrJobs={arrJobs} />
      </>
    );
  }
}

export default MyComponent;
