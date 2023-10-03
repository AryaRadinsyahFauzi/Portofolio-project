burger = document.querySelector(".burger");
burger.onclick = function() {
    navbar = document.querySelector(".navbar-section")
    navbar.classList.toggle("active")
}




const mengetik = new Typed(".typing", {
    strings: ["Welcome to My portofolio website. "],
    typeSpeed: 50,
    backSpeed: 10,
    loop: false,
    showCursor: false,
});