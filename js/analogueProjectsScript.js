
var projectHolder;

function setUp () {

    projectHolder = $('#projectHolder');

    createProjectTiles();

    projectHolder.slideDown(1000);
}

function createProjectTiles () {
    console.log("setting up tiles");

    projectHolder.html("");
    for (var i = 0; i < projects.length; i++) {
        var x = projects[i];
        addProject(x.title, x.image, x.text, x.date);
    }
}

function addProject (title, image, text, date) {

    //gets 
    str = projectHolder.html();

    str += "<article>";


    var images = removeSpaces(image);
    var images = images.split(",");

    for (var i = 0; i < images.length; i++) {
        if (i%2 == 0)
            str += "<img src=\"../images/analogueProjects/" + images[i] + "\" alt=\"projectPhoto\" style=\"clear:left\">"
        else
            str += "<img src=\"../images/analogueProjects/" + images[i] + "\" alt=\"projectPhoto\">"
    }
    
    str += "<h3 class=\"title\">" + title + "</h3><br>"
    str += "<p class=\"content\">" + text + "</p>"
    str += "<p class=\"date\">" + date + "</p>"
    str += "</article>"

    projectHolder.html(str);

}

function removeSpaces (string) {
    var output = "";
    for (var i = 0; i < string.length; i++) {
        if (string[i] !== " ") {
            output += string[i];
        }
    }
    return output;
}