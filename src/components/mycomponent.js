import react from "react";

class MyComponent extends react.Component {
  // let name = "My Component";
  state = { firstName: "", lastName: "" };

  render() {
    return (
      <>
        <form>
          <label>First Name: </label>
          <input
            type="text"
            value={this.state.firstName}
            onChange={(e) => this.setState({ firstName: e.target.value })}
          />
          <br />
          <label>Last Name: </label>
          <input
            type="text"
            value={this.state.lastName}
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
      </>
    );
  }
}

export default MyComponent;
