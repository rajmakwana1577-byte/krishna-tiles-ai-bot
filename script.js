/* =====================================
   Krishna Ceramics Store
   script.js v3.0
   Part 1
===================================== */

/* ===========================
   Hero Auto Slider
=========================== */

const slides = document.querySelectorAll(".hero-slider .slide");

let currentSlide = 0;

function showSlide(index){

    slides.forEach((slide)=>{
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");
}

function nextSlide(){

    currentSlide++;

    if(currentSlide >= slides.length){
        currentSlide = 0;
    }

    showSlide(currentSlide);
}

if(slides.length > 0){

    showSlide(currentSlide);

    setInterval(nextSlide,4000);

}


/* ===========================
   Mobile Menu
=========================== */

const menuToggle = document.querySelector(".menu-toggle");

const menu = document.querySelector(".menu");

if(menuToggle){

    menuToggle.addEventListener("click",()=>{

        menu.classList.toggle("active");

    });

}


/* ===========================
   Smooth Scroll
=========================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

        if(menu){

            menu.classList.remove("active");

        }

    });

});
