//list of genres, they're sorted before being displayed
var generas = [
    "Acoustic",
    "Neo-Soul",
    "Pop",    
    "Country"
];

//list of albums and their details

//linkType: SoundCloud/YouTube/Spotify
//link (for YouTube) take only the characters after "watch?v=" in the video url
//link (for SoundCloud) take only the characters between "api.soundcloud.com/tracks/" and "&amp;color=%23ff5500&amp..." from the embed button on soundcloud
//link (for Spotify) click ... share, copy URI and use that

var albums = [

{
    albumName:"The Fall",
    bandName:"Eliza May",
    date:"2018",
    genre:"Pop",
    roles:"Mixed, Produced",
    image:"The Fall - Eliza May.jpg",
    link:"spotify:track:0BIDIdPX4OkTcHfGbYNqoM",
    linkType:"Spotify"
},

{
    albumName:"Wisteria Tree",
    bandName:"Monetté Allison",
    date:"2017",
    genre:"Neo-Soul",
    roles:"Recorded, Mixed",
    image:"Wisteria Tree - Monetté Allison.jpg",
    link:"spotify:track:1bLDbFUfrlkjkmH0gBFJtO",
    linkType:"Spotify"
},

{
    albumName:"Come Home",
    bandName:"Jasper and the Island",
    date:"2017",
    genre:"Country",
    roles:"Recorded, Mixed",
    image:"Come Home - Jasper and the Island.png",
    link:"342953590",
    linkType:"SoundCloud"
},

{
    albumName:"Long Way From Home",
    bandName:"Logan",
    date:"2017",
    genre:"Acoustic, Pop",
    roles:"Mixed, Recorded, Produced",
    image:"",
    link:"349909333",
    linkType:"SoundCloud"
}
    
];

//<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/342953590&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>",

//<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/349909333&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>