$(document).ready(function() {
    const projectImageArr = document.querySelectorAll(".proj-image-container");

    const options = {
        root: null,
        threshold: 1,
        rootMargin: "-100px"
    };

    projectImageArr.forEach(function(projectImage) {
        const observer = new IntersectionObserver(function(entries, observer) {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    entry.target.classList.remove("in-focus");
                } else {
                    console.log(entry.target);
                    entry.target.classList.add("in-focus");
                }    
            });
        }, options);

        observer.observe(projectImage);
    })
})