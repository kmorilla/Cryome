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

    var windowWidth = $(window).outerWidth(true);

    if (windowWidth > 768) {
        map.panBy(300, 0);
    } else {
        map.panBy(0, 0);
    }

    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}

$(window).resize(function () {
    initMap();
});