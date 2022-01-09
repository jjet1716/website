$(document).ready(function() {
    $('.nav-toggle').click(function() {
        $('.nav-list').toggleClass('open');
        $('body').toggleClass('dialog-open');
    })
})