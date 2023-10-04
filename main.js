burger = document.querySelector(".burger");
burger.onclick = function() {
    navbar = document.querySelector(".navbar-section")
    navbar.classList.toggle("active")
}


// Function Navigasi Bar Smooth (Navbar) (Awal)
document.querySelectorAll("nav a").forEach((tautan) => {
    tautan.addEventListener("click", function (e) {
        const href = this.getAttribute("href");
        if (href.startsWith("#")) {
            e.preventDefault();
            const idTujuan = href.substring(1);
            const tujuan = document.getElementById(idTujuan);
            
            if (tujuan) {
                tujuan.scrollIntoView({
                    behavior: "smooth",
                });
            }
        }
    });
  });
  // Function Navigasi Bar Smooth (Navbar) (Akhir)

const mengetik = new Typed(".typing", {
    strings: ["Welcome to My portofolio website. 👋 "],
    typeSpeed: 50,
    backSpeed: 10,
    loop: false,
    showCursor: false,
});

const ngetik = new Typed(".type" , {
    strings: ["Software Engineer", "Data Analyst"],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true,
    showCursor: false,
});

