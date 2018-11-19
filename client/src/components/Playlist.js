import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';


// Need info about a user
// Need info about that users ideas



const NewIdeaButton = styled.button`
  background: #1d3557;
  color: white;
  font-size: 1.3rem;
  padding: 7.5px 5px;
`

const IdeasContainerStyle = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-content: flex-start;
`

class Playlist extends Component {
  state = {
    user: {},
    playlist: []
  }

  componentDidMount() {
    // make an api call to get one single user
    // On the server URL is '/api/users/:userId'
    const userId = this.props.match.params.userId
    axios.get(`/api/user/${userId}`).then(res => {
      console.log(res.data)
      this.setState({
        user: res.data,
        playlist: res.data.playlist
      })
    })
  }

  handleCreateNewPlaylist = () => {
    const userId = this.props.match.params.userId
    const payload = {
        playlistName: 'Playlist playlistName ',
        image: 'Playlist image',
        track1: 'Playlist track1',
        track2: 'Playlist track2',
        track3: 'Playlist track3',
        track4: 'Playlist track4',
        track5: 'Playlist track5'
    }
    axios.post(`/api/user/${userId}/playlist`, payload).then(res => {
      const newPlaylist = res.data
      const newStatePlaylist = [...this.state.playlist, newPlaylist]
      this.setState({ playlist: newStatePlaylist })
    })
  }
  handleDelete = playlistId => {
    // some unique value
    axios.delete(`/api/playlist/${playlistId}`).then(() => {
      //Remove the playlist with playlistID from this.state.playlist
      const newPlaylist = [...this.state.playlist]
      // Return only playlist that are NOT the id provided
      const filtered = newPlaylist.filter(playlist => {
        return playlist._id !== playlistId // ! = =
      })
      // Take filtered data and set it to playlist
      this.setState({playlist: filtered})
    })
  }

  handleChange = (event, playlistId) => {
    // const name = event.target.name
    // const value = event.target.value
    const { value, name } = event.target
    const newPlaylist = [...this.state.playlist]
    const updatedVals = newPlaylist.map(playlist => {
      if (playlist._id === playlistId){
        playlist[name] = value
      }
      return playlist
    }) 

    this.setState({playlist: updatedVals})
  }

  handleUpdate = (playlistId) => {
    // Find the individual updated playlist from this.state.playlists
    const playlistToUpdate = this.state.playlist.find(playlist => {
      return playlist._id === playlistId
    })
    // axios post the endpoint with updated data
    axios.patch(`/api/playlist/${playlistId}`, playlistToUpdate).then(() => {
      console.log("Updated playlist")  
    })
    // console .log saved
  }

  render() {
    return (
      <div>
        <h1>{this.state.user.username}'s Playlists</h1>
        <NewIdeaButton onClick={this.handleCreateNewPlaylist}>Create New Playlist</NewIdeaButton>
        
        <IdeasContainerStyle>
          {this.state.playlist.map(playlist => {
            const deletePlaylist = () => {
              return this.handleDelete(playlist._id)
            }

            return (
                <div>
             
             
               <h3> <img src={playlist.image} alt=""/></h3>
               <h3>Playlist: {playlist.playlistName} </h3>
               <div>
               <a target="_blank" href={`https://www.youtube.com/results?search_query=${playlist.track1}`}>favorite track1: {playlist.track1}</a>
               </div>
               <div>
               <a href={`https://www.youtube.com/results?search_query=${playlist.track2}`}>favorite track2: {playlist.track2}</a>
               </div>
               <div>
               <a href={`https://www.youtube.com/results?search_query=${playlist.track3}`}>favorite track3: {playlist.track3}</a>
               </div>
               <div>
               <a href={`https://www.youtube.com/results?search_query=${playlist.track4}`}>favorite track4: {playlist.track4}</a>
               </div>
               <div>
               <a href={`https://www.youtube.com/results?search_query=${playlist.track5}`}>favorite track5: {playlist.track5}</a>
               </div>
       
              
                <NewIdeaButton onClick={deletePlaylist}>Delete This Playlist</NewIdeaButton>
                </div>
            )
          })}
        </IdeasContainerStyle>
      </div>
    )
  }
}

export default Playlist;



