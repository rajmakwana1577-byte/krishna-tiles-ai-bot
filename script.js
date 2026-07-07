function openPopup(title, text) {

    document.getElementById("popup").style.display = "flex";

    document.getElementById("popupTitle").innerText = title;

    document.getElementById("popupText").innerText = text;

    document.getElementById("popupBtn").href =
    "https://wa.me/919510108013?text=Hello Krishna Ceramics Store, I want information about " + encodeURIComponent(title);

}

function closePopup() {

    document.getElementById("popup").style.display = "none";

}

window.onclick = function(event){

    const popup = document.getElementById("popup");

    if(event.target == popup){

        popup.style.display = "none";

    }

}
// ===== Hero Slider =====

let currentSlide = 0;
const slides = document.querySelectorAll(".hero-slider .slide");

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
}

if (slides.length > 0) {
    setInterval(() => {
        currentSlide++;
        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
        showSlide(currentSlide);
    }, 4000);
}
// ===== Premium Hero Background Slider =====

const slides = document.querySelectorAll(".hero-slider img");

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

// पहली इमेज
showSlide(currentSlide);

// हर 4 सेकंड में बदले
setInterval(nextSlide,4000);
