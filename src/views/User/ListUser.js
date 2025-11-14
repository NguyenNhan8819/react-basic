import react from "react";
import axios from "axios";
import "./ListUser.scss";
import { withRouter } from "./withRouter";

class ListUser extends react.Component {
  state = {
    ListUsers: [],
  };
  componentDidMount() {
    // Example of fetching user data when the component mounts
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log("Fetched users:", response.data);
        this.setState({
          ListUsers: response.data,
        });
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }
  handleViewDetailUser = (user) => {
    // Navigate to detail user page
    this.props.router.navigate(`/users/${user.id}`);
  };

  render() {
    let { ListUsers } = this.state;
    return (
      <div>
        <h3>List of Users</h3>

        <div>
          {ListUsers &&
            ListUsers.length > 0 &&
            ListUsers.map((user) => {
              return (
                <div
                  key={user.id}
                  className="user-content"
                  onClick={() => this.handleViewDetailUser(user)}
                >
                  {user.id} - {user.name} - {user.email}
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default withRouter(ListUser);
