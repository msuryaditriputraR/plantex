const navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close");

/*=============== SHOW MENU ===============*/
// Validate if constant exist
if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
    });
}

/*=============== HIDDEN MENU ===============*/
// Validate if constant exist
if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
    const navMenu = document.getElementById("nav-menu");

    navMenu.classList.remove("show-menu");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
    const header = document.getElementById("header");
    // WHen the scroll point is greater than 80 viewport height, changes color
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
}

window.addEventListener("scroll", scrollHeader);

/*=============== QUESTIONS ACCORDION ===============*/
const accordionItems = document.querySelectorAll(".questions__item");

accordionItems.forEach((item) => {
    const accordionHeader = item.querySelector(".questions__header");

    accordionHeader.addEventListener("click", () => {
        const accordionOpen = document.querySelector(".accordion-open");
        toggleItem(item);

        if (accordionOpen && accordionOpen !== item) toggleItem(accordionOpen);
    });
});

const toggleItem = (item) => {
    console.log(item);
    const accordionContent = item.querySelector(".questions__content");

    if (item.classList.contains("accordion-open")) {
        accordionContent.removeAttribute("style");
        item.classList.remove("accordion-open");
    } else {
        accordionContent.style.height = accordionContent.scrollHeight + "px";
        item.classList.add("accordion-open");
    }
};

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document
                .querySelector(`.nav__menu a[href*=${sectionId}]`)
                .classList.add("active-link");
        } else {
            document
                .querySelector(`.nav__menu a[href*=${sectionId}]`)
                .classList.remove("active-link");
        }
    });
}

window.addEventListener("scroll", scrollActive);

/*=============== SHOW SCROLL UP ===============*/
function scrollUp() {
    const scrollUp = document.getElementById("scroll-up");

    this.scrollY >= 200
        ? scrollUp.classList.add("show-scroll")
        : scrollUp.classList.remove("show-scroll");
}

window.addEventListener("scroll", scrollUp);

/*=============== DARK LIGHT THEME ===============*/
const themeToggle = document.getElementById("theme-toggle");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-line";

// get previous theme selected
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// validate if user selected theme previously
if (selectedTheme) {
    // change the theme according to the previous user's choice
    document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
        darkTheme
    );
    themeToggle.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](
        iconTheme
    );
}

// create function to get current theme to save in local storage
const getCurrentTheme = () =>
    document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
    themeToggle.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line";

// Activate / deactivate the theme with the button
themeToggle.addEventListener("click", () => {
    // ADD or remove dark class
    document.body.classList.toggle(darkTheme);
    themeToggle.classList.toggle(iconTheme);

    // save to localstorage what theme user choose
    localStorage.setItem("selected-theme", getCurrentTheme());
    localStorage.setItem("selected-icon", getCurrentIcon());
});

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 400,
    // reset: true
});

sr.reveal(".home__data");
sr.reveal(".home__img", { delay: 500 });
sr.reveal(".home__social", { delay: 600 });
sr.reveal(".about__img, .contact__box", { origin: "left" });
sr.reveal(".about__data, .contact__form", { origin: "right" });
sr.reveal(".steps__card, .product__card, .questions__group, .footer", {
    interval: 100,
});
