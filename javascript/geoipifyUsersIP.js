var informacion = {};
var ip = "";
const APIKey = "at_iLyNhxxmOVmqIDb2acIml2l0Zlz2U";

//para mostrar el IP del usuario al inicio de la página
if (window.location == window.location) {
    window.onload = obtenerResultadoIP();
}
function mostrarResultado(){
    //respuesta en html
    document.querySelector("#isp").textContent = ` ${informacion.isp}`
    document.querySelector("#ip").textContent = ` ${informacion.ip}`
    document.querySelector("#ubicacion").textContent = ` ${informacion.city}, ${informacion.region}, ${informacion.country}`
    document.querySelector("#postal").textContent = ` ${informacion.postalCode}`
    document.querySelector("#coord").textContent = ` ${informacion.lat} , ${informacion.lng}`
    document.querySelector("#timezone").textContent = ` ${informacion.timezone}`
    document.querySelector("#dominio").textContent = ` ${informacion.domain}`
    document.querySelector("#asn").textContent = ` ${informacion.asn}`

    //ubicación en el mapa
    map.flyTo([informacion.lat, informacion.lng],13)
}

function obtenerResultadoIP(){
    fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${APIKey}&ipAddress=${ip}`,{
        method: "Get",
        headers: {
        accept: 'application/json'
        }
    })
        .then(response => response.json())
        .then(response => {
            //conecciones con api
            console.log("API CONECTADA");
            console.log(response);

            //sacamos la informacion deseada
            const {city, country, region, lat, lng, postalCode, timezone} = response.location;
            const {ip, isp} = response
            const {domain, asn} = response.as

            //la asignamos a un nuevo objeto
            informacion = Object.assign({ip, isp} ,  {city, country, region, lat, lng, postalCode, timezone}, {domain, asn})
            console.log(informacion);
            mostrarResultado(informacion);
        })
        .catch(err => console.error(err));

}