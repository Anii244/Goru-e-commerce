
      const mobileMenuBtn = document.getElementById("mobileMenuBtn");
      const mobileNav = document.getElementById("mobileNav");
      const dropdownBtns = document.querySelectorAll(".dropdown-btn");

      mobileMenuBtn.addEventListener("click", () => {
        mobileNav.classList.toggle("active");
      });

      const subMenuToggler = document.getElementById("subMenuToggler");
      subMenuToggler.addEventListener("click", () => {
        const submenu = subMenuToggler.nextElementSibling;
        submenu.classList.toggle("active");
      });

      dropdownBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
          const submenu = btn.nextElementSibling;
          submenu.classList.toggle("active");
        });
      });
