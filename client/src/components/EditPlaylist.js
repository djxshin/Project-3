import React, { Component } from "react";
import axios from "axios";


class EditPlaylist extends Component {
  state = {
      user: {},
    playlists: [],
    playlist:"",
    newPlaylist: {
        playlistName: "",
        image: "",
        track1: "",
        track2: "",
        track3: "",
        track4: "",
        track5: ""
    }
  };

  componentDidMount() {
    // make an api call to get one single user
    // On the server URL is '/api/playlists/:userId'
    const playlistId = this.props.match.params.playlistId
  
    axios.get(`/api/playlist/${playlistId}`).then(res => {
      console.log(res.data)
      this.setState({ playlist: res.data})
    })
  }

  handleChange = event => {
    console.log("name", event.target.name);
    console.log("value", event.target.value);
    const updatedNewPlaylist = { ...this.state.newPlaylist };

    // Event Target Name will be either 'name' or 'description'
    updatedNewPlaylist[event.target.name] = event.target.value;
    this.setState({ newPlaylist: updatedNewPlaylist });
  };

  handleSubmit = event => {
    event.preventDefault();

    const playlistId = this.props.match.params.playlistId
    axios.patch(`/api/playlist/${playlistId}`, this.state.newPlaylist).then(res => {
      // when we get that data back, we need to navigate to the new playlists page
      const userId = this.props.match.params.userId
      
      this.props.history.push(`/user`);
    });
  };

  render() {
    return (
      <div>
        
        <h3>Edit User</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="name">Playlist Name: </label>
            <input
              onChange={this.handleChange}
              value={this.state.newPlaylist.playlistName}
              type="text"
              name="playlistName"
          
              
            />
          </div>
          <div>
            <label htmlFor="image">Playlist Image: </label>
            <input
              onChange={this.handleChange}
              value={this.state.newPlaylist.image}
              type="text"
              name="image"
            
            />
          </div>
          <div>
            <label htmlFor="track1">Track1: </label>
            <input
              onChange={this.handleChange}
              value={this.state.newPlaylist.track1}
              type="text"
              name="track1"
             
            />
          </div>
          <div>
            <label htmlFor="track2">
            Track2:{" "}
            </label>
            <input
              onChange={this.handleChange}
              value={this.state.newPlaylist.track2}
              type="text"
              name="track2"
              
            />
          </div>
          <div>
            <label htmlFor="track3">
            Track3:{" "}
            </label>
            <input
              onChange={this.handleChange}
              value={this.state.newPlaylist.track3}
              type="text"
              name="track3"
              
            />
          </div>
          <div>
            <label htmlFor="track4">
            Track4:{" "}
            </label>
            <input
              onChange={this.handleChange}
              value={this.state.newPlaylist.track4}
              type="text"
              name="track4"
          
            />
          </div>
          <div>
            <label htmlFor="track5">
            Track5:{" "}
            </label>
            <input
              onChange={this.handleChange}
              value={this.state.newPlaylist.track5}
              type="text"
              name="track5"
             
            />
          </div>
          <button type="submit">Submit</button>
        </form>
       
      </div>
    );
  }
}

export default EditPlaylist;
