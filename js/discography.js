//list of generas, they're sorted before being displayed
var generas = [
    "Rock",
    "Alt",
    "Pop",
    "Punk"
];

//list of albums and their details

//linkType: SoundCloud/YouTube/Spotify
//link (for YouTube) take only the characters after "watch?v=" in the video url
//link (for SoundCloud) take only the characters between "api.soundcloud.com/tracks/" and "&amp;color=%23ff5500&amp..." from the embed button on soundcloud
//link (for Spotify) click ... share, copy URI and use that

var albums = [

{
    albumName:"Fluff-nuts",
    bandName:"Green Day",
    date:"2004",
    genre:"Punk",
    roles:"Mixed",
    image:"cover.png",
    link:"e9x4o1gAzTc",
    linkType:"YouTube"
},

{
    albumName:"Fluff-nuts: the comeback",
    bandName:"Two Door Cinema Club",
    date:"2012",
    genre:"Alt",
    roles:"Recorded",
    image:"cover.png",
    link:"295357176",
    linkType:"SoundCloud"
},

{
    albumName:"Fluf-nut...",
    bandName:"MGMT",
    date:"2012",
    genre:"Pop, Alt",
    roles:"Recorded, Mixed, Produced",
    image:"cover.png",
    link:"spotify:album:5hXgjTSvzx1CtmTtRlCOTZ",
    linkType:"Spotify"
},

{
    albumName:"They're back",
    bandName:"The Fratelis",
    date:"2012",
    genre:"Pop, Rock",
    roles:"Mixed",
    image:"cover.png",
    link:"spotify:track:3WQGwy4LNHMmeeb2PDfgWo",
    linkType:"Spotify"
}
    
];