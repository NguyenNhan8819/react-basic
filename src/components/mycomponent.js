import react from "react";
import ChildComponent from "./childComponent";
import AddComponent from "./addComponent";

class MyComponent extends react.Component {
  // let name = "My Component";
  state = {
    arrJobs: [
      { id: "job1", title: "Developer", salary: "600" },
      { id: "job2", title: "Tester", salary: "400" },
      { id: "job3", title: "Project Manager", salary: "1000" },
    ],
  };
  handleAddNewJob = (job) => {
    console.log(">>> check job from parent: ", job);
    this.setState({
      arrJobs: [...this.state.arrJobs, job],
    });
  };

  render() {
    const { arrJobs } = this.state;
    return (
      <>
        <AddComponent addNewJob={this.handleAddNewJob} />
        <ChildComponent arrJobs={arrJobs} />
      </>
    );
  }
}

export default MyComponent;
