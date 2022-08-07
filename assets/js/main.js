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

/*=============== SHOW SCROLL UP ===============*/

/*=============== DARK LIGHT THEME ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/
