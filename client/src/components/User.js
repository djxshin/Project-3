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
