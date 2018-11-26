import React, { Component } from 'react';
import '../index.css'
class Homepage extends Component {
    render() {
        return (
            <div classname="greet"> 
                Greetings! welcome to PLS (Play-List-Share).

Have you ever wanted to share your playlist with your friends/family, but couldn't because of different streaming services being used between you and them?

Now you can share you're playlist that directly links your playlist to youtube.

Once you create a User account and make a playlist that you'll input 5 of the your favorite tracks using a form, then those inputs from the form will be clickable links to populate a youtube search based on whatever the user has typed on the the input.

Simle enough right? Now go and share you're playlist with your loved ones.

When a User enters the home page, then they will see the full description of the app.

Nav bar will be on the home page to navigate the user through the app.

- Nav bar contains 3 links

    1. Back to Homepage
    2. Users Page (where you can browse through all the users)
    3. Create User (link to the create new user page)
User Page
When the user clicks on the individual User Link (image), then the User page will show up.

The User page will have -NavBar

Link to User Info
When the user is in the individual user link, then it will go to the user info page and all the playlists.

User Info
when the user clicks on a specific users link, then the user will be directed to the user information page. User information page contains each specific use's:

username
profile image -Instagram handle -Main Streaming Service -Streaming Service Username
There will also be a Edit button and a Delete button on the page to Edit the user infromation, or to completely delete the user.

Playlist
When the user is on the individual user's page, and then click on that individual user's playlist, then the user will be on the playlist page.

One the user is on the playlist page of the individual user, they will see the title of the playlist and list of the tracks on the page.

each individual playlists will have a Delete button that will delete that specific playlist.

User will be able to create playlist as well, which you will press the create playlist button that will be specific to the User.

When user will press the create new playlist button, then the user will be on the create playlist page. Input fields will be provided on the page and users will put in the values they choose on the input field, then the user will hit the submit button.

User will be able to edit each individual playlists as well.

Then the user will be lead back to the user playlist page.
            </div>
        );
    }
}

export default Homepage;