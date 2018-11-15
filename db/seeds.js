const User = require('../models/User')
const Playlist = require('../models/Playlist')
const mongoose = require('./connections')

const KevinPL = new Playlist({
    playlistName: 'iloveGainsville',
    image: 'https://www.gainesville.org/images/logo-small-001.png',
    track1: "Numb, by Linkin-Park",
    Track2: "Notorius Thugs by Bone-Thugs",
    Track3: "So fresh, So Clean by Outkast",
    Track4: "It was a Good Day by Ice Cube",
    Track5: "Ambitionz Az a Ridah by Tupac "
})

const DJPL = new Playlist({
    playlistName: 'threeStacktheGoat',
    image: 'http://atlantablackstar.com/wp-content/uploads/2017/10/Andre-3000.png',
    track1: "Prototype, by Andre3000",
    Track2: "Jukebox Joints, by ASAP Rocky",
    Track3: "Motion, by Khalid",
    Track4: "Summertime Magic, Childish Gambino ",
    Track5: "Only You, by Theophilus London"
})

const DJ = new User({
    username: 'holdMyDrink',
    image: 'https://hips.hearstapps.com/esq.h-cdn.co/assets/17/03/1484751145-chappelle-rick-james.jpg?resize=480:*',
    instagram: 'soonDoobooKilla',
    mainStreamingService: 'Apple',
    streamingUsername: 'DJ Shin',
    playlist: [DJPL]
})

const Kevin = new User({
    username: 'youngLilKev',
    image: 'https://target.scene7.com/is/image/Target/GUEST_136af684-35c0-4dcf-948e-adfdf33031cf?wid=488&hei=488&fmt=pjpeg',
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