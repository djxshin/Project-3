import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";


const NavBarStyles = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: aqua;
  height: 50px;

  a {
    text-decoration: none;
    padding-left: 10px;
    color: black;
    &:active {
      color: red;
    }
  }
`;

class UserInfo extends Component {
  state = {
    user: {}
  };

  componentDidMount() {
    // make an api call to get one single user
    // On the server URL is '/api/users/:userId'
    const userId = this.props.match.params.userId;
    axios.get(`/api/user/${userId}`).then(res => {
      console.log(res.data);
      this.setState({ user: res.data });
    });
  }

  handleDelete() {
    let userId = this.state.user._id;
    axios
      .delete(`/api/user/${userId}`)
      .then(response => {
        this.props.history.push("/user");
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="page">
        <NavBarStyles id="nav-container" className="some-class">
          <button><Link to={`/user/${this.props.match.params.userId}/edit`}>
            Edit Profile
          </Link></button>
          <button><Link to={`/user/${this.props.match.params.userId}/playlist`}>
            View {this.state.user.username}'s Playlist
          </Link></button>
          <button onClick={this.handleDelete.bind(this)}>
            Delete {this.state.user.username}{" "}
          </button>
        </NavBarStyles>
        <div className="header1">
      
        </div>
    
       <div class="infoDetail">
        <div class="profileI">
          <img src={this.state.user.image} alt="" className="picPro" />
        </div>
        <div className="info">
        <h5>Username: {this.state.user.username}</h5>
        <h5>Instagram: {this.state.user.instagram} </h5>
        <h5>Main Streaming Service: {this.state.user.mainStreamingService} </h5>
        <h5>
          Streaming Service Username: {this.state.user.streamingUsername}{" "}
        </h5>
        </div>
        </div>

   
      </div>
    );
  }
}

export default UserInfo;
