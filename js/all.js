$(document).ready(function () {
    $('.navBtn').click(function (e) { 
        e.preventDefault();
        $('.wrap').toggleClass('menushow');
    });
});