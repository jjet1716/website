$(document).ready(function() {
    const projectImageArr = document.querySelectorAll(".proj-image-container");

    const options = {
        root: null,
        threshold: 1,
        rootMargin: "-60px 0px 60px 0px"
    };

    projectImageArr.forEach(function(projectImage) {
        const observer = new IntersectionObserver(function(entries, observer) {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    entry.target.classList.add("not-in-focus");
                } else {
                    console.log(entry.target);
                    entry.target.classList.remove("not-in-focus");
                }    
            });
        }, options);

        observer.observe(projectImage);
    })
})