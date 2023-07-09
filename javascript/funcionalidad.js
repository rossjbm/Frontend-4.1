var id =document.getElementById("navegacion")
function menuAbrir() {
    id.style.display="flex";
    id.style.flexDirection="column";
    id.style.gap="25px";
}
function menuCerrar() {
    if (id.style.display==="flex") {
        id.style.display="none";
    }
}