var holder;
var holderJQ;

function setUp () {

    holder = document.getElementById('projectHolder');
    hodlerJS = $('#projectHolder');
    hodlerJS.hide();
    createTestimonials();
    hodlerJS.slideDown(1000);

}

function createTestimonials () {
    holder.innerHTML = "";

    for (var i = 0; i < testimonials.length; i++) {
        var t = testimonials[i];
        addTestimonial(t.name, t.text);
    }

}

function addTestimonial (name, content) {

    var str = "";
    str += "<article>";
    str += "<p class=\"content\">" + content + "</p>";
    str += "<p class=\"name\">" + name + "</p>"
    str += "</article>";

    holder.innerHTML += str;

}