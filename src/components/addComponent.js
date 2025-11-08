import React from "react";

class AddComponent extends React.Component {
  state = {
    titleJob: "",
    salary: "",
  };
  render() {
    const { titleJob, salary } = this.state;
    return (
      <>
        <form>
          <label>Job's title: </label> <br />
          <input
            type="text"
            value={titleJob}
            onChange={(e) => this.setState({ titleJob: e.target.value })}
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
            onClick={(e) => {
              alert("Bạn đã click");
              e.preventDefault();
              console.log(this.state);
            }}
          />
        </form>
      </>
    );
  }
}

export default AddComponent;
