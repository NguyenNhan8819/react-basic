import react from "react";

class childComponent extends react.Component {
  state = {};

  render() {
    const { name } = this.props;
    return <>Child Component: {name}</>;
  }
}

export default childComponent;
