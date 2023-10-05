/*.....................................................
membuat navbar aktif
.......................................................*/
const navLinkEls = document.querySelectorAll('.nav-link');
const sectionEls = document.querySelectorAll('section');

let currentSection = 'Home';
window.addEventListener('scroll', () => {
    sectionEls.forEach(sectionEl => {
        if(window.scrollY >= (sectionEl.offsetTop - 200)) {
            currentSection = sectionEl.id;
        }
    });

    navLinkEls.forEach(navLinkEl => {
        if(navLinkEl.href.includes(currentSection)) {
            document.querySelector('.nyala').classList.remove('nyala');
            navLinkEl.classList.add('nyala');
        }
    });
});

/*.....................................................
membuat navbar aktif end
.......................................................*/


/*.....................................................
membuat hamburger navbar
.......................................................*/
burger = document.querySelector(".burger");
burger.onclick = function () {
    navbar = document.querySelector(".navbar-section")
    navbar.classList.toggle("active")
}
/*.....................................................
membuat hamburger navbar end
.......................................................*/

/*.....................................................
typing animation (section home)
.......................................................*/
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
/*.....................................................
typing animation (section home) end
.......................................................*/