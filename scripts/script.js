const arrowUp = document.getElementById("arrowUp");

window.addEventListener("scroll", () => {
    if (window.scrollY > 60) {
        arrowUp.style.display = "flex";
        setTimeout(() => {
            arrowUp.style.opacity = 1;
        }, 50)
    } else {
        arrowUp.style.opacity = 0;
        setTimeout(() => {
            arrowUp.style.display = "none";
        }, 350)
    }
})

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

arrowUp.addEventListener('click', () => { scrollToTop() })

let openedNav = false;
const openNav = document.getElementById("openNav");
const openNavIcon = document.getElementById("openNavIcon");

const openNavFunctionality = () => {
    if (!openedNav) {
        document.querySelector("nav").style.display = "flex";
        setTimeout(() => {
            document.querySelector("nav").style.opacity = 1;
        }, 50)

        openNavIcon.classList.remove("bi-list");
        openNavIcon.classList.add("bi-x-lg");
        openedNav = true;
        openNav.setAttribute("aria-expanded", "true");
        document.body.style.overflow = "hidden";
    } else {
        document.querySelector("nav").style.opacity = 0;
        setTimeout(() => {
            document.querySelector("nav").style.display = "none";
        }, 250)

        openNavIcon.classList.remove("bi-x-lg");
        openNavIcon.classList.add("bi-list");
        openedNav = false;
        openNav.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "visible";
    }
}

openNav.addEventListener("click", openNavFunctionality)

const navLinks = document.querySelectorAll("nav > a, .nav-contactlink");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        if (openedNav) {
            openNavFunctionality();
        }
    })
})

const mainLogoIcon = document.getElementById("main-logo");

const darkModeMql = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');

const changeMainLogoIcon = (colorScheme) => {
    if (colorScheme == "dark") {
        mainLogoIcon.setAttribute("src", "./assets/logo-white.svg");
    } else {
        mainLogoIcon.setAttribute("src", "./assets/logo.svg");
    }
}

if (darkModeMql && darkModeMql.matches) {
    changeMainLogoIcon("dark");
} else {
    changeMainLogoIcon("light");
}

window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", event => {
    const newColorScheme = event.matches ? "dark" : "light";
    changeMainLogoIcon(newColorScheme);
})
