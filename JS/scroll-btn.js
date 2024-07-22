

let mybutton = document.getElementById("scrollToTopBtn");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        mybutton.style.display = "flex";
    } else {
        mybutton.style.display = "none";
    }
}


mybutton.onclick = function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}
