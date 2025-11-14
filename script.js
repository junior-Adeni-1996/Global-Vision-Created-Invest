const navbar = document.querySelector(".navbar");
const scrollWatcher = document.createElement("div");
const humburger = document.querySelector(".humburger-menu");
const navLinks = document.querySelector(".nav-links");
// const logoTwo = document.querySelector(".logo-two");

scrollWatcher.setAttribute("data-scroll-watcher", "");
navbar.before(scrollWatcher);

const navObserver = new IntersectionObserver((entries) => {

    navbar.classList.toggle('sticky', !entries[0].isIntersecting)
},{rootMargin: "50px 0px 0px 0px"})

//the rootMargin is where the scroll takes effect and also the unit'px' have to be present ot it will not work: the attribute set on the scrollWatcher can be used in the css to make changes too

navObserver.observe(scrollWatcher);


humburger.addEventListener("click", () =>{
    humburger.classList.toggle("active");
    navLinks.classList.toggle("active");
})

document.querySelectorAll(".nav-links").forEach(e => e.addEventListener("click", () => {
    humburger.classList.remove("active");
    navLinks.classList.remove("active");
}))
