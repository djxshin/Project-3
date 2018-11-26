import React, { Component } from 'react';
import '../index.css'
class Homepage extends Component {
    render() {
        return (
            <div>
            <div className="HomeBanner">

            </div>
            <div className="greet"> 
                Greetings! welcome to PLS (Play-List-Share).

Have you ever wanted to share your playlist with your friends/family, but couldn't because of different streaming services being used between you and them?

<br>
</br>

Now you can share you're playlist that directly links your playlist to youtube.

Once you create a User account and make a playlist that you'll input 5 of the your favorite tracks using a form, then those inputs from the form will be clickable links to populate a youtube search based on whatever the user has typed on the the input.

Simle enough right? Now go and share you're playlist with your loved ones.


            </div>
            <div className="musicBanner">

            </div>
            </div>
        );
    }
}

export default Homepage;