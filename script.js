function showPopup(title, text){

    document.getElementById("popupTitle").innerHTML = title;

    document.getElementById("popupText").innerHTML = text;

    document.getElementById("popupBtn").href =
    "https://wa.me/919510108013?text=Hello I am interested in " + encodeURIComponent(title);

    document.getElementById("popup").style.display="flex";

}

function closePopup(){

    document.getElementById("popup").style.display="none";

}
