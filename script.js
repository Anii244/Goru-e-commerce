const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileNav = document.getElementById("mobileNav");

mobileMenuBtn.addEventListener("click", () => {
    mobileNav.classList.toggle("active");
});

const dropdownBtns = document.querySelectorAll(".dropdown-btn");

dropdownBtns.forEach((btn) => {

    btn.addEventListener("click", () => {

        const submenu = btn.nextElementSibling;

        submenu.classList.toggle("active");

    });

});

const scrollTopBtn = document.querySelector(".scroll-top");

if (scrollTopBtn) {

    scrollTopBtn.addEventListener("click", () => {

        const hero = document.getElementById("hero");

        if (hero) {

            hero.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

}
document.getElementById("hero").scrollIntoView({
    behavior: "smooth"
});

