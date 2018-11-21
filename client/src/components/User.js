import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import '../index.css'
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
      <div className="wrapper">
        
        <div className="header">
        <h1 className="h1">
        USERS PAGE
        </h1>
        </div>
        <div className="flex">
        {this.state.users.map(user => (
          <div key={user._id}>

            <Link to={`/user/${user._id}`} className="link">
            <div className="username">
              {user.username} <br />
            </div>
            <div className="profilePic">
              <img src={user.image} className="pic" alt="" />
            </div>
            </Link>
            
          </div>
        ))}

       </div>
      </div>
    );
  }
}

export default User;
