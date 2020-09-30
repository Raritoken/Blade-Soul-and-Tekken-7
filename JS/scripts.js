$(function() {
    $("#KuniWiki").add($("#KuniWiki2")).click(function() {
        window.open("https://tekken.fandom.com/wiki/Kunimitsu_II");
    });
});
$(function() {
    $("#KazumiWiki").click(function() {
        window.open("https://tekken.fandom.com/wiki/Kazumi_Mishima");
    });
});
$(function() {
    $(window).scroll(function() {
        var showBTN = 1000;
        if ($(this).scrollTop() > showBTN) {
            $("#btt").fadeIn();
        }
        else {
            $("#btt").fadeOut();
        }
    });
    $("#btt").click(function() {
        $('html, body').animate({scrollTop: 0}, 500);
        return false;
    });
});