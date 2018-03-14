var albumHolder;
var productionCheckBoxes = [];
var generaSelecter;
var player;
var isOverlayVisible;
var frames = [];

function setupDiscography () {

    productionCheckBoxes = document.getElementsByClassName("productionRoleCB");
    generaSelecter = document.getElementById("generaPicker");
    frames = [document.getElementById("YouTubeIframe"),
            document.getElementById("SoundCloudIframe"),
            document.getElementById("SpotifyIframe")
            ];

    frames[0].style.display = "none";
    frames[1].style.display = "none";
    frames[2].style.display = "none";

    //sets up all the generas in the picker
    generas.sort();
    var str = "<option value=\"All\">All</option>";
    for (var i = 0; i < generas.length; i++) {
        str += "<option value=\"" + generas[i] + "\">" + generas[i] + "</option>";
    }
    generaSelecter.innerHTML = str;
    findAndSetMaxHeight();

    albumHolder = document.getElementById('albumHolder');
    //displays the tiles
    albumHolder.innerHTML = "";
    for (var i = 0; i < albums.length; i++) {
        var x = albums[i];
        addAlbumToDisplay(x.albumName, x.bandName, x.date, x.image, x.genre, x.roles, i);
    }


    $('#albumHolder').slideDown(1000);
    player = $('#player');
    player.hide();
    isOverlayVisible = true;

}

window.onload = setupDiscography;

function addAlbumToDisplay (name, band, date, image, genera, production, id) {

    str = "";

    str += "<article class=\"album\" onclick=\"displayAlbum (this)\">";
    str += "<img src=\"../images/albumCovers/" + image + "\" alt=\"albumCover\" align=\"left\">";
    str += "<p>";
    str += "<span class=\"albumName\">" + name + "</span><br>";
    str += "<span class=\"bandName\">by " + band + "</span><br>";
    str += "<span class=\"date\">" + date + "</span><br><br>";
    str += "<span class=\"genera\">Genera: " + genera + "</span><br>";

    str += "<span class=\"production\">Role: " + production + "</span>";  

    str += "<p style=\"display:none\" class=\"albumID\">" + id + "</p>"

    str += "</p></article>";

    albumHolder.innerHTML += str;

}

function search () {

    hideAlbum();
    $('#albumHolder').slideUp(1000, function() {

    var mixedSearch = productionCheckBoxes[0].checked;
    var RecordedSearch = productionCheckBoxes[1].checked;
    var producedSearch = productionCheckBoxes[2].checked;
    var generaSearch = generaSelecter.value;

    var haveDisplayedAnAlbum = false;

    //for each of the albums, checks if it fits the search cryteria
    //if it does, it's displayed
    albumHolder.innerHTML = "";

    for (var i = 0; i < albums.length; i++) {
        var roles = removeChar(albums[i].roles, ' ').split(",");
        var genears = removeChar(albums[i].genre, ' ').split(",");

        var productionRole = false;

        if (mixedSearch && arrIncludesValue(roles, "Mixed")) {
            productionRole = true;
        } else if (RecordedSearch && arrIncludesValue(roles, "Recorded")) {
            productionRole = true;
        } else if (producedSearch && arrIncludesValue(roles, "Produced")) {
            productionRole = true;
        }

        if (productionRole && (arrIncludesValue(genears, generaSearch) || generaSearch == "All")) {
            var x = albums[i];
            haveDisplayedAnAlbum = true;
            addAlbumToDisplay(x.albumName, x.bandName, x.date, x.image, x.genre, x.roles, i);
        }
        
    }

    if (!haveDisplayedAnAlbum)
        albumHolder.innerHTML = "<h2>This search has returned no results</h2>";

    //findAndSetMaxHeight();
    //$('.album').fadeOut(1000, function () {
    //    $('.album').fadeIn(1500);
    //});
    $('#albumHolder').slideDown(1000);
    });
}

function displayAlbum (me) {
    player.slideUp(1000, function () {
        //var width = albumOverlay.clientWidth;
        //albumOverlay.style.left = ((document.documentElement.clientWidth/2) - (width*0.4)) + "px";
        
        var albumID = (me).getElementsByClassName("albumID")[0].innerHTML;//$(me).find("#albumID").html;// = findDetails(me.getElementsByTagName("span")[0].innerHTML, me.getElementsByTagName("span")[1].innerHTML.substr(3));
        console.log(albumID);
        var details = albums[albumID];

        var imageSrc = "../images/albumCovers/" + details.image;
        $(player).find('img').attr("src", imageSrc);
        $(player).find('h3').html(details.albumName);

        var desc = "by " + details.bandName + "<br>";
        desc += "Released in " + details.date + "<br>";
        $(player).find('p').html(desc);

        if (details.linkType == "YouTube") {
            //albumOverlay.getElementsByTagName("div")[0].innerHTML = "<iframe width=\"560\" height=\"315\" src=\"\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>";
            frames[0].style.display = "block";
            frames[1].style.display = "none";
            frames[2].style.display = "none";
            
            var link = "https://www.youtube.com/embed/S1zY4Nm0qIk";
            frames[0].src = link;

        } else if (details.linkType == "SoundCloud") {
            //albumOverlay.getElementsByTagName("div")[0].innerHTML = "<iframe width=\"100%\" height=\"300\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay\" src=\"\"></iframe>";
            frames[0].style.display = "none";
            frames[1].style.display = "block";
            frames[2].style.display = "none";
            
            frames[1].src = "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/" + details.link + "&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true";
        } else if (details.linkType == "Spotify"){
            //albumOverlay.getElementsByTagName("div")[0].innerHTML = "<iframe src=\"\" width=\"300\" height=\"80\" frameborder=\"0\" allowtransparency=\"true\"></iframe>";
            frames[0].style.display = "none";
            frames[1].style.display = "none";
            frames[2].style.display = "block";
            
            frames[2].src = "https://open.spotify.com/embed?uri=" + details.link;
        } else {
            frames[0].style.display = "none";
            frames[1].style.display = "none";
            frames[2].style.display = "none";

            consoel.log("not a valid link type");
        }

        player.slideDown(1000);
        isOverlayVisible = true;
        

        //player.scrollIntoView();
    });
    //make sure the overlay fits vertically in the screen
    /*if (albumOverlay.clientHeight >= document.documentElement.clientHeight * 0.9) {
        albumOverlay.style.height = "80%";
        albumOverlay.style.overflowY = "scroll";
    } else {
        albumOverlay.style.height = "auto";
        albumOverlay.style.overflowY = "hidden";
    }*/
}

function hideAlbum () {
    //stops youtube
    frames[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
    frames[1].src = "";
    frames[2].src = "";
    
    $('#player').slideUp(1000);
}

function arrIncludesValue (arr, value) {

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == value)
            return true;
    }

    return false;
}

function findAndSetMaxHeight () {
    var max = 0;
    var tiles = document.getElementsByClassName("album");

    for (var i = 0; i < tiles.length; i++) {
        if (tiles[i].clientHeight > max)
            max = tiles[i].clientHeight;
    }

    return max;
}

function removeChar (string, character) {

    var len = string.length;
    var output = "";

    for (var i = 0; i < len; i++) {
        if (string[i] != character)
            output += string[i];
    }

    return output;

}

function findDetails (albumName, bandName) {

    for (var i = 0; i < albums.length; i++) {
        if (albums[i].albumName == albumName && albums[i].bandName == bandName) 
            return albums[i];
    }

    return null;

}

