// Ajout de la class sticky au header
const header = document.querySelector("header");
const scrBtn = document.querySelector(".scroll-btnn i");

window.addEventListener("scroll", ()=>{
    header.classList.toggle("sticky", window.scrollY > 10)
    if(window.scrollY > 1700){
        scrBtn.style.display = "block";
    }
    else{
        scrBtn.style.display = "none";
    }
    menu.classList.remove("bx-x");
    navlist.classList.remove("open");
})

// mennu icon

let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");
menu.onclick = () =>{
    menu.classList.toggle("bx-x")
    navlist.classList.toggle("open")
}

// Scroll reveal

const sr = ScrollReveal({
    distance : "40px",
    duration : 2050,
    delay : 200,
    reset : true
});

sr.reveal(".hero-text", {origin : "top"});
sr.reveal(".about-img, .service-item, .about-text", {origin : "bottom"});
sr.reveal(".about-text h2, .text-center, .right-contact h2", {origin : "top"});
sr.reveal(".left-contact", {origin : "left"});
sr.reveal(".right-contact", {origin : "right"});
sr.reveal(".end-section", {origin : "top"});


