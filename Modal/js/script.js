$(document).ready(function () {
    $('ul li').hover(function () {
        $('>ul', this).fadeIn(300);
    }, function () {
        $('>ul', this).fadeOut(300);
    });
});