let info = document.querySelector("#info");
function getLocation(){
    navigator.geolocation.getCurrentPosition(function(position){
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude
        info.textContent = `Latitud: ${latitude} - Longitud: ${longitude}`;
        notify();
    },function(error){
        console.log(error.message);
    });
}
let button = document.querySelector("#ubicacion") ;
button.addEventListener("click", () => {
    getLocation();
});

// Notificacion
const notify = () =>{
    Notification.requestPermission()
    .then(permission =>{
        // Si permitio las notificaciones
        if(permission = 'granted'){
            new Notification("This are your coordinatse");
        }
    });
}