import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import User from './components/User'
import UserInfo from './components/UserInfo'
import NavBar from './components/Navbar';
import { createGlobalStyle } from 'styled-components'
import Homepage from './components/Homepage';
import Create from './components/Create';
import Playlist from './components/Playlist';
import EditUser from './components/EditUser';
import CreatePlaylist from './components/CreatePlaylist';
import EditPlaylist from './components/EditPlaylist';


const Global = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Poppins');
  
  body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    background: #A8DADC;
  }
`
class App extends Component {
  render () {
    return (
      <Router>
        <div>
        <Global />
          <NavBar />
         
          <Switch>
            <Route exact path="/user" component={User}/>
            <Route exact path="/user/create" component={Create}/>
            <Route exact path="/user/:userId" component={UserInfo}/>
            <Route exact path="/user/:userId/edit" component={EditUser}/>
            <Route exact path="/user/:userId/playlist" component={Playlist}/>
            <Route exact path="/user/:userId/playlist/create" component={CreatePlaylist}/>
            <Route exact path="/playlist/:playlistId" component={EditPlaylist}/>
            <Route  path="/" component={Homepage}/>
          </Switch>
        </div>
      </Router>
    )
  }
}


export default App

