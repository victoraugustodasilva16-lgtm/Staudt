function hideNav() {
  const nav = document.getElementById("nav");
  
  nav.style.transform = "translateX(-250px)"
}

function showNav() {
  const nav = document.getElementById("nav");
  
  nav.style.transform = "translateX(0)"
  nav.style.transition = "transform 0.5s ease-in-out"
}