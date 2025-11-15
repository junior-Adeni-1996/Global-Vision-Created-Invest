requestAnimationFrame()
const navbar = document.querySelector(".navbar");
const scrollWatcher = document.createElement("div");
const humburger = document.querySelector(".humburger-menu");
const navLinks = document.querySelector(".nav-links");
const scrollToTop = document.querySelector(".scroll-to-top");

scrollWatcher.setAttribute("data-scroll-watcher", "");
navbar.before(scrollWatcher);

const navObserver = new IntersectionObserver((entries) => {
    navbar.classList.toggle('sticky', !entries[0].isIntersecting)
}, { rootMargin: "50px 0px 0px 0px" });

navObserver.observe(scrollWatcher);


// ======= Menu burger =======
humburger.addEventListener("click", () => {
    humburger.classList.toggle("active");
    navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(link => 
    link.addEventListener("click", () => {
        humburger.classList.remove("active");
        navLinks.classList.remove("active");
    })
);


// ======= Scroll to top (optimisé) =======
let scrolling = false;

window.addEventListener("scroll", () => {
    if (!scrolling) {
        window.requestAnimationFrame(() => {       
            if (window.pageYOffset > 100) {
                scrollToTop.classList.add("scroll");
            } else {
                scrollToTop.classList.remove("scroll");
            }
            scrolling = false;
        });
        scrolling = true;
    }
});

if (scrollToTop) {
    scrollToTop.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}
requestAnimationFrame()
