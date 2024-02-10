var sidenav=document.querySelector(".side-navbar")


function showNavbar(){
//  sidenav.style.display="block";
 sidenav.style.left="0"
}

function closeNavbar(){
 // sidenav.style.display="none";
 sidenav.style.left="-60%"
}

function redirectToCollection() {
    console.log("Button clicked!");
    window.location.href = "Collection.html";
}
