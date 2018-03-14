
function toggleMenu () {
    var menu = $('nav ul');
    var hidden = menu.css('display');

    if (hidden == "none") {
        menu.slideDown(1000);   
    } else {
        menu.slideUp(1000);
    }
    

}