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
