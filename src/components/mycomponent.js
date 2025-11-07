import react from "react";

class MyComponent extends react.Component {
  // let name = "My Component";
  state = { name: "", chanel: "" };
  handleOnChangeName = (event) => {
    console.log(
      "event",
      event.target.value,
      "event targer:",
      event.target,
      "event object:",
      event
    );
    this.setState({ name: event.target.value });
  };

  render() {
    return (
      <>
        <div className="first">
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleOnChangeName}
          />
          <h1>This is {this.state.name}</h1>
        </div>
        <div className="second">
          <input
            type="text"
            onChange={(event) => this.setState({ chanel: event.target.value })}
          />
          <h1>This is {this.state.chanel}</h1>
        </div>
        <div className="third">
          <button
            onClick={() => {
              alert(`Hello ${this.state.name}`);
            }}
          >
            Click me
          </button>
        </div>
      </>
    );
  }
}

export default MyComponent;
