import react from "react";

class childComponent extends react.Component {
  render() {
    const { name, arrJobs } = this.props;
    return (
      <>
        <p> Child Component: {name} </p>
        <h4>List jobs: </h4>
        {arrJobs && arrJobs.length > 0 ? (
          arrJobs.map((job) => (
            <div key={job.id}>
              {job.title} - {job.salary}
            </div>
          ))
        ) : (
          <div>No jobs available</div>
        )}
      </>
    );
  }
}

export default childComponent;
