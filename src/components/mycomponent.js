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

  render() {
    const { arrJobs } = this.state;
    return (
      <>
        <AddComponent />
        <ChildComponent arrJobs={arrJobs} />
      </>
    );
  }
}

export default MyComponent;
