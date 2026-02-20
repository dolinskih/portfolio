const header = document.getElementById("header");
const mobileMenuButton = document.getElementById("mobileNavMenuButton");
const mobileUpButton = document.getElementById("mobileNavUpButton");
const mobileMenu = document.getElementById("mobileMenu");
const mobileMenuCloseButton = document.getElementById("mobileMenuCloseButton");
const mobileMenuLinks = document.querySelectorAll(".mobileMenuLink")

window.addEventListener("scroll", () => {
    if (window.scrollY > 60) {
        header.classList.add("headerBackdrop");
        if (mobileMenuButton.style.display != "none") {
            mobileUpButton.style.display = "flex";
            setTimeout(() => {
                mobileUpButton.style.opacity = 1;
            }, 50)
        }
    } else {
        header.classList.remove("headerBackdrop");
        mobileUpButton.style.opacity = 0;
        setTimeout(() => {
            mobileUpButton.style.display = "none";
        }, 250)
    }
})

const closeMobileMenu = () => {
    mobileMenu.style.opacity = 0;
    document.body.style.overflow = "auto";
    setTimeout(() => {
        mobileMenu.style.display = "none";
    }, 250)
}

mobileMenuButton.addEventListener("click", () => {
    mobileMenu.style.display = "flex";
    document.body.style.overflow = "hidden";
    setTimeout(() => {
        mobileMenu.style.opacity = 1;
    }, 50)
})

mobileMenuLinks.forEach(mlink => {
    mlink.addEventListener("click", closeMobileMenu)
})

mobileMenuCloseButton.addEventListener("click", closeMobileMenu)

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}