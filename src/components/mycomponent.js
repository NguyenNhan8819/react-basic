import react from "react";

class MyComponent extends react.Component {
  render() {
    // let name = "My Component";
    this.state = { name: "Nhân" };
    return (
      <div>
        <h1>This is {this.state.name}</h1>
      </div>
    );
  }
}

export default MyComponent;
