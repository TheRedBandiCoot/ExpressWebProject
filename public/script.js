// Select Elements
const GLOBAL_FEATURE_LIST = document.querySelector(".feature-list")
const GLOBAL_COMPANY_LIST = document.querySelector(".company-list")
const featureBtn = document.querySelector(".feature-btn")
const companyBtn = document.querySelector(".company-btn")
const backdrop = document.querySelector(".backdrop")
const br = document.querySelector(".break")

// For Feature Btn
featureBtn.addEventListener("click", (e) => {
    GLOBAL_FEATURE_LIST.querySelectorAll("p").forEach(e => e.classList.add("feature-list-all-p"))
    GLOBAL_FEATURE_LIST.querySelectorAll("svg").forEach(e => e.classList.add("feature-list-all-svg"))
    GLOBAL_FEATURE_LIST.querySelectorAll("path").forEach(e => e.classList.add("feature-list-all-path"))
    GLOBAL_FEATURE_LIST.classList.toggle("show")
    e.target.children[0].classList.toggle("arrow-show")
    e.target.children[1].classList.toggle("arrow-show")
    document.addEventListener("click", (e) => {
        if (e.target.matches(".feature-btn") || e.target.matches(".feature-list") || e.target.matches(".feature-list-all-p") || e.target.matches(".feature-list-all-svg") || e.target.matches(".feature-list-all-path")) return
        GLOBAL_FEATURE_LIST.classList.remove("show")
        featureBtn.children[0].classList.add("arrow-show")
        featureBtn.children[1].classList.remove("arrow-show")
    })
})
// For Company Btn
companyBtn.addEventListener("click", (e) => {
    GLOBAL_COMPANY_LIST.querySelectorAll("p").forEach(e => e.classList.add("company-list-all-p"))
    GLOBAL_COMPANY_LIST.classList.toggle("show")
    e.target.children[0].classList.toggle("arrow-show")
    e.target.children[1].classList.toggle("arrow-show")
    document.addEventListener("click", (e) => {
        if (e.target.matches(".company-btn") || e.target.matches(".company-list") || e.target.matches(".company-list-all-p")) return
        GLOBAL_COMPANY_LIST.classList.remove("show")
        companyBtn.children[0].classList.add("arrow-show")
        companyBtn.children[1].classList.remove("arrow-show")
    })
})
// Menu btn
document.addEventListener("click", (e) => {
    if (!e.target.matches(".menu-open-btn")) return
    e.target.classList.toggle("display-none")
    e.target.nextElementSibling.classList.add("display-show")
    e.target.previousElementSibling.classList.add("display-show")
    e.target.closest(".menu").nextElementSibling.children[1].classList.add("display-show")
    e.target.closest(".menu").nextElementSibling.children[2].classList.add("display-flex")
    e.target.closest(".menu").children[0].classList.add("display-show")
})

document.addEventListener("click", (e) => {
    if (e.target.matches(".menu-feature-btn")) {
        e.target.closest(".menu-feature").children[1].classList.toggle("display-show")
        e.target.closest(".menu-feature").children[0].children[0].classList.toggle("display-none")
        e.target.closest(".menu-feature").children[0].children[1].classList.toggle("menu-arrow-show")
    }
    if (e.target.matches(".menu-company-btn")) {
        e.target.closest(".menu-company").children[1].classList.toggle("display-show")
        e.target.closest(".menu-company").children[0].children[0].classList.toggle("display-none")
        e.target.closest(".menu-company").children[0].children[1].classList.toggle("menu-arrow-show")
    }
})

// Menu-close-btn 
document.addEventListener("click", (e) => {
    if (e.target.matches(".menu-close-btn")) {
        console.log(e.target.matches(".menu-close-btn"));
        e.target.classList.remove("display-show")
        e.target.previousElementSibling.classList.remove("display-none")
        e.target.closest(".menu").children[1].classList.remove("display-show")
        e.target.closest(".menu").nextElementSibling.children[1].classList.remove("display-show")
        e.target.closest(".menu").nextElementSibling.children[2].classList.remove("display-flex")
        e.target.closest(".menu").firstElementChild.classList.remove("display-show")
    } else if (e.target.matches(".backdrop")) {
        e.target.closest(".menu").children[2].classList.remove("display-none")
        e.target.closest(".menu").children[3].classList.remove("display-show")
        e.target.nextElementSibling.classList.remove("display-show")
        e.target.closest(".menu").firstElementChild.classList.remove("display-show")
        e.target.closest(".menu").nextElementSibling.children[1].classList.remove("display-show")
        e.target.closest(".menu").nextElementSibling.children[2].classList.remove("display-flex")
    }
})
if (window.innerWidth <= 895) {
    featureBtn.closest("li").classList.replace("feature", "menu-feature")
    companyBtn.closest("li").classList.replace("company", "menu-company")
    featureBtn.classList.replace("feature-btn", "menu-feature-btn")
    companyBtn.classList.replace("company-btn", "menu-company-btn")
    GLOBAL_FEATURE_LIST.classList.replace("feature-list", "menu-feature-list")
    GLOBAL_COMPANY_LIST.classList.replace("company-list", "menu-company-list")
    br.classList.add("display-none")
}

window.addEventListener("resize", (e) => {
    if (window.innerWidth <= 895) {
        br.classList.add("display-none")
        featureBtn.closest("li").classList.replace("feature", "menu-feature")
        companyBtn.closest("li").classList.replace("company", "menu-company")
        featureBtn.classList.replace("feature-btn", "menu-feature-btn")
        companyBtn.classList.replace("company-btn", "menu-company-btn")
        GLOBAL_FEATURE_LIST.classList.replace("feature-list", "menu-feature-list")
        GLOBAL_COMPANY_LIST.classList.replace("company-list", "menu-company-list")
    } else {
        br.classList.remove("display-none")
        featureBtn.closest("li").classList.replace("menu-feature", "feature")
        companyBtn.closest("li").classList.replace("menu-company", "company")
        featureBtn.classList.replace("menu-feature-btn", "feature-btn")
        companyBtn.classList.replace("menu-company-btn", "company-btn")
        GLOBAL_FEATURE_LIST.classList.replace("menu-feature-list", "feature-list")
        GLOBAL_COMPANY_LIST.classList.replace("menu-company-list", "company-list")
    }
})

