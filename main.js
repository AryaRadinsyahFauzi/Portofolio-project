burger = document.querySelector(".burger");
burger.onclick = function () {
    navbar = document.querySelector(".navbar-section")
    navbar.classList.toggle("active")
}

const ngetik = new Typed(".type", {
    strings: ["Software Engineer", "Data Analyst"],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true,
    showCursor: false,
});

const mengetik = new Typed(".typewriter", {
    strings: ["Welcome to My portofolio website. 👋 "],
    typeSpeed: 50,
    backSpeed: 10,
    loop: false,
    showCursor: false,
});


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('nyala');
                document.querySelector('header nav a  [href*= '+ id +']').classList.add('nyala');
            });
        };
    });
};
