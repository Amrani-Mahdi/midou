let hum = document.querySelector(".hum")
let humMenu = document.querySelector(".hum-menu")

hum.onclick = function(){
    hum.classList.toggle("active")
    humMenu.classList.toggle("active")
}