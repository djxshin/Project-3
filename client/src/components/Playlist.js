import React, { Component } from 'react';
import axios from 'axios'

class Playlist extends Component {
    state = {
        user: {},
       
      }
    
      componentDidMount() {
        // make an api call to get one single user
        // On the server URL is '/api/users/:userId'
        const userId = this.props.match.params.userId
        axios.get(`/api/user/${userId}`).then(res => {
          console.log(res.data)
          this.setState({ user: res.data })
        })
      }

    render() {
        return (
            <div>
               <h1>Username: {this.state.user.username} </h1>
               <h2><img src={this.state.user.image} alt=""/></h2>
               <h2>Instagram: {this.state.user.instagram} </h2>
               <h2>Main Streaming Service: {this.state.user.mainStreamingService} </h2>
               <h2>Streaming Service Username: {this.state.user.streamingUsername} </h2>
               
            </div>
        );
    }
}

export default Playlist;

