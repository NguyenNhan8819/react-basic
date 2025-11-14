import react from "react";
import { withRouter } from "./withRouter";
import axios from "axios";

class DetailUser extends react.Component {
  state = {
    userDetail: {},
  };
  async componentDidMount() {
    // const id = this.props.match.params.id;
    const id = this.props.router.params.id;
    const resp = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    this.setState({
      userDetail: resp.data,
    });

    console.log(">>> check data user: ", resp.data);
  }
  handelBackUser = () => {
    // Navigate back to home page
    this.props.router.navigate(`/users`);
  };
  render() {
    console.log(">>> check props detail user: ", this.props.router.params);
    return (
      <>
        <div id="abc">Check id: {this.props.router.params.id} </div>
        <div>
          Name: {this.state.userDetail.name} - Email: {}
          {this.state.userDetail.email} - Phone: {this.state.userDetail.phone}
        </div>
        <div className="line">
          <button type="button" onClick={() => this.handelBackUser()}>
            Back
          </button>
        </div>
      </>
    );
  }
}

export default withRouter(DetailUser);
