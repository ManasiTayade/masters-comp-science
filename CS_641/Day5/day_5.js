console.log("Hello Sensehack!");

function getLocation() {
    if (!navigator.geolocation) return unsupported();
    var locText = "Location is ";
    navigator.geolocation.getCurrentPosition(

        function (pos) {
            console.log("Position is (" + pos.coords.latitude + ", " + pos.coords.longitude + ")");


            document.getElementById('location').innerHTML = locText + "( " + pos.coords.latitude + ", " + pos.coords.longitude + ")";
        },

        function error(e) {
            console.log("Error code " + e.code + " & message " + e.message);

        }
    )
}