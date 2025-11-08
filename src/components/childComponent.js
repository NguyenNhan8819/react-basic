import react from "react";

class childComponent extends react.Component {
  state = { showJobs: false };
  handleShowHide = () => {
    this.setState({
      showJobs: !this.state.showJobs,
    });
  };
  render() {
    const { name, arrJobs } = this.props;
    let { showJobs } = this.state;
    return (
      <>
        <p> Child Component: {name} </p>
        <h4>List jobs: </h4>
        {showJobs === false ? (
          <div>
            <button onClick={() => this.handleShowHide()}>Show</button>
          </div>
        ) : (
          <>
            <div>
              {arrJobs && arrJobs.length > 0 ? (
                arrJobs
                  .filter((job) => parseInt(job.salary) >= 600)
                  .map((job) => (
                    <div key={job.id}>
                      {job.title} - {job.salary}
                    </div>
                  ))
              ) : (
                <div>No jobs available</div>
              )}
            </div>
            <div>
              <button onClick={() => this.handleShowHide()}>Hide</button>
            </div>
          </>
        )}
      </>
    );
  }
}

export default childComponent;
