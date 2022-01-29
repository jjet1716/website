$(document).ready(function() {
    const websiteSection = document.querySelector(".websites");

    const options = {
        root: null,
        threshold: 0.50,
        rootMargin: "0px 0px 0px 0px"
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                //entry.target.classList.remove("visiting");
                entry.target.classList.add("unvisited");
                return;
            } else {
                entry.target.classList.remove("unvisited");
                entry.target.classList.add("visiting");
                observer.unobserve(websiteSection);
            }    
        });
    }, options);

    observer.observe(websiteSection);
})