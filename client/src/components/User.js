import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class User extends Component {
  state = {
    users: [],
    newUser: {
      username: "",
      image: "",
      instagram: "",
      mainStreamingService: "",
      streamingUsername: ""
    }
  };

  handleChange = event => {
    console.log("name", event.target.name);
    console.log("value", event.target.value);
    const updatedNewUser = { ...this.state.newUser };

    // Event Target Name will be either 'name' or 'description'
    updatedNewUser[event.target.name] = event.target.value;
    this.setState({ newUser: updatedNewUser });
  };

  handleSubmit = event => {
    event.preventDefault();

    // Make post to our api to create new user
    axios.post("/api/user", this.state.newUser).then(res => {
      // when we get that data back, we need to navigate to the new users page

      this.props.history.push(`/user/${res.data._id}`);
    });
  };

  getallUser = () => {
    axios.get("/api/user").then(res => {
      console.log(res.data);
      this.setState({ users: res.data });
    });
  };

  componentDidMount() {
    this.getallUser();
  }

  render() {
    return (
      <div>
        <h3>USERS</h3>
        {this.state.users.map(user => (
          <div key={user._id}>
            <Link to={`/user/${user._id}`}>
              {user.username} <br />
              <img src={user.image} alt="" />
            </Link>
          </div>
        ))}

       
      </div>
    );
  }
}

export default User;
