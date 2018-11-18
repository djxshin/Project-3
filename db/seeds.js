const User = require('../models/User')
const Playlist = require('../models/Playlist')
const mongoose = require('./connections')

const KevinPL = new Playlist({
    playlistName: 'iloveGainsville',
    image: 'https://www.gainesville.org/images/logo-small-001.png',
    track1: "Numb, by Linkin-Park",
    track2: "Notorius Thugs by Bone-Thugs",
    track3: "Sotfresh, So Clean by Outkast",
    track4: "Ittwas a Good Day by Ice Cube",
    track5: "Amtitionz Az a Ridah by Tupac "
})

const DJPL = new Playlist({
    playlistName: 'threeStacktheGoat',
    image: 'http://atlantablackstar.com/wp-content/uploads/2017/10/Andre-3000.png',
    track1: "Prototype, by Andre3000",
    track2: "Jukebox Joints, by ASAP Rocky",
    track3: "Motion, by Khalid",
    track4: "Summertime Magic, Childish Gambino ",
    track5: "Only You, by Theophilus London"
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