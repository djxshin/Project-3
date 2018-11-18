const User = require('../models/User')
const Playlist = require('../models/Playlist')
const mongoose = require('./connections')

const KevinPL = new Playlist({
    playlistName: 'iloveGainsville',
    image: 'https://www.gainesville.org/images/logo-small-001.png',
    track1: "Numb, by Linkin-Park",
    track2: "Notorius Thugs by Bone-Thugs",
    track3: "Sofresh, So Clean by Outkast",
    track4: "It was a Good Day by Ice Cube",
    track5: "Amtitionz Az a Ridah by Tupac "
})

const DJPL = new Playlist({
    playlistName: 'threeStacktheGoat',
    image: 'http://atlantablackstar.com/wp-content/uploads/2017/10/Andre-3000.png',
    track1: "Prototype, by Andre3000",
    track2: "Jukebox Joints, by ASAP Rocky",
    track3: "Motion, by Khalid",
    track4: "Summertime Magic, by Childish Gambino ",
    track5: "Only You, by Theophilus London"
})

const DJ = new User({
    username: 'holdMyDrink',
    image: 'https://media.licdn.com/dms/image/C4E03AQEOj8fvzYqeuA/profile-displayphoto-shrink_200_200/0?e=1548288000&v=beta&t=omobsQWJVvAHiakrVq_CiOaKp2wu6Rler3Jlo-idnEk',
    instagram: 'soonDoobooKilla',
    mainStreamingService: 'Apple',
    streamingUsername: 'DJ Shin',
    playlist: [DJPL]
})

const Kevin = new User({
    username: 'youngLilKev',
    image: 'https://media.licdn.com/dms/image/C4E03AQHltlZzv7xEYg/profile-displayphoto-shrink_800_800/0?e=1548288000&v=beta&t=XaemGq5pV4RL52EH9FVKKqSTy59WxPHVbDMiAYT3-24',
    instagram: 'ninjaScare',
    mainStreamingService: 'Spotify',
    streamingUsername: 'kevin.rosales',
    playlist: [KevinPL]
})



User.remove({})
    .then(() => Playlist.remove({}))
    .then(() => Playlist.insertMany([KevinPL, DJPL]))
    .then(() => Kevin.save())
    .then(() => DJ.save())
    .then(() => console.log('Successful Save'))
    .then(() => mongoose.connection.close())