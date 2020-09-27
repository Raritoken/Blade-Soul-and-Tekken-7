function BnS() {
    var x = document.getElementById("title");
    if (x.onclick) {
        window.open("https://bladeandsoul.com/");
    }
}
function unhide() {
    var x = document.getElementById("txt");
    if (x.onpointerenter) {
        x.style.opacity = 0;
    }
    else {
        x.style.opacity = 1;
    }
}
function hide() {
    var x = document.getElementById("txt");
    if (x.onpointerleave) {
        x.style.opacity = 0;
    }
    else {
        x.style.opacity = 0;
    }
}
function Stats() {
    var x = document.getElementById("Sho");
    if (x.onclick) {
        window.open("http://eu-bns.ncsoft.com/ingame/bs/character/profile?c=shoufumii%20&s=202");
    }
}