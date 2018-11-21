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
      
        <h3 className="headerC">Edit User</h3>
        <div className="formE">
        <form onSubmit={this.handleSubmit}>
          <div>
            <div>
            <label htmlFor="name">Username: </label>
            </div>
            <input
              onChange={this.handleChange}
              value={this.state.newUser.username}
              type="text"
              name="username"
           
              
            />
          </div>
          <div>
            <div>
            <label htmlFor="image">User Image: </label>
            </div>
            <input
              onChange={this.handleChange}
              value={this.state.newUser.image}
              type="text"
              name="image"
             
            />
          </div>
          <div>
          <div>
            <label htmlFor="instagram">Instagram: </label>
            </div>
            <input
              onChange={this.handleChange}
              value={this.state.newUser.instagram}
              type="text"
              name="instagram"
             
            />
          </div>
          <div>
          <div>
            <label htmlFor="mainStreamingService">
         
              Main Streaming Service:{" "}
            </label>
            </div>
            <input
              onChange={this.handleChange}
              value={this.state.newUser.mainStreamingService}
              type="text"
              name="mainStreamingService"
              
            />
          </div>
          <div>
          <div>
            <label htmlFor="streamingUsername">
              Streaming Service Username:{" "}
            </label>
            </div>
            <input
              onChange={this.handleChange}
              value={this.state.newUser.streamingUsername}
              type="text"
              name="streamingUsername"
           
            />
          </div>
          <button type="submit" className="buttE">Submit</button>
        </form>
        </div>
      </div>
    );
  }
}

export default EditUser;
