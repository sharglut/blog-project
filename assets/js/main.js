// Grab elements
const selectElement = selector => {
    const element = document.querySelector(selector)
    if (element) return element
    throw new Error(`Something went wrong, make sur that ${selector} exists or is typed correctly`)
}

//Nav styles on scroll
const scrollHeader = () => {
    const headerElement = selectElement("#header")
    if (this.scrollY >= 15) {
        headerElement.classList.add("activated")
    } else {
        headerElement.classList.remove("activated")
    }
}

window.addEventListener("scroll", scrollHeader)

// Open menu & search pop-up
const menuToggleIcon = selectElement("#menu-toggle-icon")

const toggleMenu = () => {
    const mobileMenu = selectElement("#menu")
    menuToggleIcon.classList.toggle("activated")
    mobileMenu.classList.toggle("activated")
}

menuToggleIcon.addEventListener("click", toggleMenu)

// Open/Close search form popupr
const formOpenBtn = selectElement("#search-icon")
const formCloseBtn = selectElement("#form-close-btn")
const searchFormContainer = selectElement("#search-form-container")

const openForm = () => {
    searchFormContainer.classList.add("activated")
}

const closeForm = () => {
    searchFormContainer.classList.remove("activated")
}

formOpenBtn.addEventListener("click", openForm)
formCloseBtn.addEventListener("click", closeForm)

// -- Close the search form popup on ESC keypress
const escpCloseForm = (e) => {
    if (e.key === "Escape") searchFormContainer.classList.remove("activated")
}

window.addEventListener("keyup", escpCloseForm)

// Switch theme/add to local storage
const bodyElement = document.body
const themeToggleBtn = selectElement("#theme-toggle-btn")
const currentTheme = localStorage.getItem('currentTheme')

if (currentTheme) {
    bodyElement.classList.add("light-theme")
}

themeToggleBtn.addEventListener("click", () => {
    bodyElement.classList.toggle("light-theme")

    if (bodyElement.classList.contains("light-theme")) {
        localStorage.setItem('currentTheme', 'themeActive')
    } else {
        localStorage.removeItem('currentTheme')
    }
})

// Check to see if there is a theme preference in local Storage, if so add the ligt theme to the body


// Swiper
const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
    breakpoints: {
        700: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 3,
        }
    }
})
