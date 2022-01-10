$(document).ready(function() {
    var logo = document.getElementById("logo");
    var s = Snap(logo);

    var N_letter = Snap.select('#N-letter');
    var J_letter = Snap.select('#J-letter');

    var N_points = N_letter.node.getAttribute('d');
    var J_points = J_letter.node.getAttribute('d');

    function swap() {
        N_letter.animate({ d: J_points }, 150, mina.easeinout);  
        J_letter.animate({ d: N_points }, 150, mina.easeinout);
    }

    function swapBack() {
        J_letter.animate({ d: J_points }, 150, mina.easeinout);  
        N_letter.animate({ d: N_points }, 150, mina.easeinout);
    }

    function logoHover(logoElement, onHover, offHover) {
        logoElement.addEventListener('mouseenter', onHover)
        logoElement.addEventListener('mouseleave', offHover)
    }
    
    logoHover(document.getElementById("logo"), onHover => {
        swap();
    }, offHover => {
        swapBack();
    })
    
})