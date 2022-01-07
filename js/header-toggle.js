
var prev_scrollTop = 0;
window.onscroll = function() {
    // use body and documentElement for all browser support (defaults to 0 if not supported)
    let curr_scrollTop = document.documentElement.scrollTop + document.body.scrollTop;

    
    if (curr_scrollTop == 0) {
        // at top of screen
        document.getElementById("main-header").classList.add("top");
    } else {
        // not at top of screen
        document.getElementById("main-header").classList.remove("top");
    }

    
    if (curr_scrollTop > prev_scrollTop && !document.getElementById("main-header").classList.contains("invis")) {
        // scrolled down, and header is visible --> make header invisible
        document.getElementById("main-header").classList.toggle("invis");
    } else if (curr_scrollTop < prev_scrollTop && document.getElementById("main-header").classList.contains("invis")) {
        // scrolled up, and header is invisible --> make header visible
        document.getElementById("main-header").classList.toggle("invis");
    }
    
    prev_scrollTop = curr_scrollTop;
}