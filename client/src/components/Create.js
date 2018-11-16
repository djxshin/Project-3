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
        
        <h3>Create a New User</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="name">Username: </label>
            <input
              onChange={this.handleChange}
              value={this.state.newUser.username}
              type="text"
              name="username"
            />
          </div>
          <div>
            <label htmlFor="image">User Image: </label>
            <input
              onChange={this.handleChange}
              value={this.state.newUser.image}
              type="text"
              name="image"
            />
          </div>
          <div>
            <label htmlFor="instagram">Instagram: </label>
            <input
              onChange={this.handleChange}
              value={this.state.newUser.instagram}
              type="text"
              name="instagram"
            />
          </div>
          <div>
            <label htmlFor="mainStreamingService">
              Main Streaming Service:{" "}
            </label>
            <input
              onChange={this.handleChange}
              value={this.state.newUser.mainStreamingService}
              type="text"
              name="mainStreamingService"
            />
          </div>
          <div>
            <label htmlFor="streamingUsername">
              Streaming Service Username:{" "}
            </label>
            <input
              onChange={this.handleChange}
              value={this.state.newUser.streamingUsername}
              type="text"
              name="streamingUsername"
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default User;
