import { Component } from "react";
import classes from "./User.module.css";

class User extends Component {
  componentWillUnmount() {
    console.log("COMPONENT_WILL_MOUNT_USER");
  }

  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
