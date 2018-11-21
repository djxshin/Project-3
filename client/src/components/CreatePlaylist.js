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
        
        <h3 className="headerPC">Create a Playlist</h3>
        <div className="formPC">
        <form onSubmit={this.handleSubmit}>
          <div>
            <div>
            <label htmlFor="playlistName">Playlist: </label>
            </div>
            <input
              onChange={this.handleChange}
              value={this.state.newPlaylist.playlistName}
              type="text"
              name="playlistName"
              placeholder="enter name for playlist"
            />
          </div>
          <div>
          <div>
            <label htmlFor="image">Playlist Image: </label>
            </div>
            <input
              onChange={this.handleChange}
              value={this.state.newPlaylist.image}
              type="text"
              name="image"
              placeholder="URL image link"
            />
          </div>
          <div>
          <div>
            <label htmlFor="track1">Favorite Track1: </label>
            </div>
            <input
              onChange={this.handleChange}
              value={this.state.newPlaylist.track1}
              type="text"
              name="track1"
              placeholder=" track, by artist"
            />
          </div>
          <div>
          <div>
            <label htmlFor="track2">Favorite Track2: </label>
            </div>
            <input
              onChange={this.handleChange}
              value={this.state.newPlaylist.track2}
              type="text"
              name="track2"
              placeholder=" track, by artist"
            />
          </div>
          <div>
          <div>
            <label htmlFor="track3">Favorite Track3: </label>
            </div>
            <input
              onChange={this.handleChange}
              value={this.state.newPlaylist.track3}
              type="text"
              name="track3"
              placeholder=" track, by artist"
            />
          </div>
          <div>
          <div>
            <label htmlFor="track4">Favorite Track4: </label>
            </div>
            <input
              onChange={this.handleChange}
              value={this.state.newPlaylist.track4}
              type="text"
              name="track4"
              placeholder=" track, by artist"
            />
          </div>
          <div>
          <div>
            <label htmlFor="track5">Favorite Track5: </label>
            </div>
            <input
              onChange={this.handleChange}
              value={this.state.newPlaylist.track5}
              type="text"
              name="track5"
              placeholder=" track, by artist"
            />
          </div>
          <button type="submit" className="buttPC">Submit</button>
        </form>
      </div>
      </div>
    );
  }
}

export default CreatePlaylist;