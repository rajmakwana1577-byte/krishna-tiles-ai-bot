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
/* =====================================
   script.js v3.0
   Part 2
===================================== */


/* ===========================
   Product Popup
=========================== */

function openPopup(title, description){

    const popup = document.getElementById("popup");

    document.getElementById("popupTitle").innerText = title;

    document.getElementById("popupDesc").innerText = description;

    document.getElementById("popupWhatsapp").href =
    "https://wa.me/919510108013?text=" +
    encodeURIComponent(
        "Hello Krishna Ceramics Store,%0A%0AI am interested in: " + title + "%0APlease send me more details."
    );

    popup.style.display = "flex";

}

function closePopup(){

    document.getElementById("popup").style.display = "none";

}

window.addEventListener("click",function(e){

    const popup=document.getElementById("popup");

    if(e.target===popup){

        popup.style.display="none";

    }

});


/* ===========================
   Back To Top Button
=========================== */

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        topBtn.style.display="flex";

    }else{

        topBtn.style.display="none";

    }

});

function scrollToTop(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}


/* ===========================
   Scroll Reveal Animation
=========================== */

const sections=document.querySelectorAll("section");

const revealSection=()=>{

    sections.forEach(section=>{

        const top=section.getBoundingClientRect().top;

        if(top<window.innerHeight-120){

            section.style.opacity="1";

            section.style.transform="translateY(0)";

        }

    });

};

sections.forEach(section=>{

    section.style.opacity="0";

    section.style.transform="translateY(60px)";

    section.style.transition=".8s ease";

});

window.addEventListener("scroll",revealSection);

revealSection();
