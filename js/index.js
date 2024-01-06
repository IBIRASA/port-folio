window.onscroll = function() {
    if (window.scrollY == 0) {
        document.getElementById("navbar").style.backgroundColor = "transparent"; 
        let navLinks = document.getElementsByClassName("navbar-a");
        for (let i = 0; i < navLinks.length; i++) {
            navLinks[i].style.color = ""; 
        }
    } else {
        document.getElementById("navbar").style.backgroundColor = "#540a0a";
        document.getElementById("navbar").style.boxShadow = "0 4px 8px 0 rgba(0,0,0,0.2)";
        let navLinks = document.getElementsByClassName("navbar-a");
        for (let i = 0; i < navLinks.length; i++) {
            navLinks[i].style.color = "white";
        }
    }
};

function hello(){
const hamburgerMenu = document.querySelector(".hamburger-menu");
const nav = document.querySelector(".nav");

hamburgerMenu.addEventListener("click", () => {
    nav.classList.toggle("active")
});
}