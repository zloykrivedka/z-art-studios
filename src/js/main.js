$(document).ready(function () {pageResize();});

window.onresize = function () {pageResize();};

function pageResize(){
    var winHeight = $(window).height();
    var winWidth =  $(window).width();

    if(winWidth < 736){
        $(".intro").css('height', 'auto');
    } else{
        $(".intro").css('height', winHeight + 'px');
    }
}

$(function () {
    $('#buttonStart').click(function () {
        $.scrollTo('#paintingStyle', 500);
    });
});