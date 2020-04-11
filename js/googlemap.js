function initMap() {
    var uluru = {
        lat: 38.407427,
        lng: -121.449315
    };
    var map = new google.maps.Map(
        document.getElementById('map'), {
        zoom: 16,
        center: uluru,
    }
    );

    $(document).ready(function () {
        locationSet(map, uluru);
    });

    $(window).resize(function () {
        locationSet(map, uluru);
    });

    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}

function locationSet(map, uluru) {
    var windowWidth = $(window).outerWidth();

    map.setCenter(uluru);

    if (windowWidth < 768) {
        map.panBy(0, 100);
        map.setZoom(15);
    } else {
        map.panBy(200, 0);
        map.setZoom(16);
    }
}

