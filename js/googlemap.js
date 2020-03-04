function initMap() {
    var uluru = {
        lat: 38.407427,
        lng: -121.449315
    };
    var map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 17,
            center: uluru,
        }
    );

    map.panBy(300, 0);

    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}