import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavBarStyles = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color:aqua;
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
      <div>
        <NavBarStyles id="nav-container" className="some-class">
          <Link to={`/user/${this.props.match.params.userId}/edit`}>
            Edit Profile
          </Link>
          <Link to={`/user/${this.props.match.params.userId}/playlist`}>
            View {this.state.user.username}'s Playlist
          </Link>
          <button onClick={this.handleDelete.bind(this)}>
            Delete {this.state.user.username}{" "}
          </button>
        </NavBarStyles>
        <div>
          <div />
          <div />
        </div>
        <h1>Username: {this.state.user.username} </h1>
        <h2>
          <img src={this.state.user.image} alt="" />
        </h2>
        <h2>Instagram: {this.state.user.instagram} </h2>
        <h2>Main Streaming Service: {this.state.user.mainStreamingService} </h2>
        <h2>
          Streaming Service Username: {this.state.user.streamingUsername}{" "}
        </h2>
      </div>
    );
  }
}

export default UserInfo;
