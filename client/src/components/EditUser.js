import React, { Component } from "react";
import axios from "axios";


class EditUser extends Component {
  state = {
    users: [],
    user:"",
    newUser: {
      username: "",
      image: "",
      instagram: "",
      mainStreamingService: "",
      streamingUsername: ""
    }
  };

  componentDidMount() {
    // make an api call to get one single user
    // On the server URL is '/api/users/:userId'
    const userId = this.props.match.params.userId
    axios.get(`/api/user/${userId}`).then(res => {
      console.log(res.data)
      this.setState({ user: res.data })
    })
  }

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

    const userId = this.props.match.params.userId
    axios.patch(`/api/user/${userId}`, this.state.newUser).then(res => {
      // when we get that data back, we need to navigate to the new users page

      this.props.history.push(`/user/${res.data._id}`);
    });
  };

  render() {
    return (
      <div>
        
        <h3>Edit User</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="name">Username: </label>
            <input
              onChange={this.handleChange}
              value={this.state.newUser.username}
              type="text"
              name="username"
              placeholder={this.state.user.username}
              
            />
          </div>
          <div>
            <label htmlFor="image">User Image: </label>
            <input
              onChange={this.handleChange}
              value={this.state.newUser.image}
              type="text"
              name="image"
              placeholder={this.state.user.image}
            />
          </div>
          <div>
            <label htmlFor="instagram">Instagram: </label>
            <input
              onChange={this.handleChange}
              value={this.state.newUser.instagram}
              type="text"
              name="instagram"
              placeholder={this.state.user.instagram}
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
              placeholder={this.state.user.mainStreamingService}
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
              placeholder={this.state.user.streamingUsername}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
       
      </div>
    );
  }
}

export default EditUser;
