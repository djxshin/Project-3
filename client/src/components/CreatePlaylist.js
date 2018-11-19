import React, { Component } from "react";
import axios from "axios";


class CreatePlaylist extends Component {
  state = {
    playlists: [],
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

    // Make post to our api to create new user
   const userId = this.props.match.params.userId
    axios.post(`/api/user/${userId}/playlist`, this.state.newPlaylist).then(res => {
      // when we get that data back, we need to navigate to the new users page
        console.log(res.data)
       
      this.props.history.push(`/user/${userId}/playlist`);
    });
  };

  getallPlaylist = () => {
    const userId = this.props.match.params.userId
    axios.get(`/api/user/${userId}/playlist`).then(res => {
      console.log(res.data);
      this.setState({ playlists: res.data });
    });
  };

  componentDidMount() {
    this.getallPlaylist();
  }

  render() {
    return (
      <div>
        
        <h3>Create a New User</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="playlistName">Playlist: </label>
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
            <label htmlFor="track1">Favorite Track1: </label>
            <input
              onChange={this.handleChange}
              value={this.state.newPlaylist.track1}
              type="text"
              name="track1"
            />
          </div>
          <div>
            <label htmlFor="track2">Favorite Track2: </label>
            <input
              onChange={this.handleChange}
              value={this.state.newPlaylist.track2}
              type="text"
              name="track2"
            />
          </div>
          <div>
            <label htmlFor="track3">Favorite Track3: </label>
            <input
              onChange={this.handleChange}
              value={this.state.newPlaylist.track3}
              type="text"
              name="track3"
            />
          </div>
          <div>
            <label htmlFor="track4">Favorite Track4: </label>
            <input
              onChange={this.handleChange}
              value={this.state.newPlaylist.track4}
              type="text"
              name="track4"
            />
          </div>
          <div>
            <label htmlFor="track5">Favorite Track5: </label>
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

export default CreatePlaylist;