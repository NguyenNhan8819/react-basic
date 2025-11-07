import react from "react";

class MyComponent extends react.Component {
  // let name = "My Component";
  state = { name: "Nhân" };
  handleOnChangeName = (event) => {
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
          <h1>This is {this.state.name}</h1>
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
