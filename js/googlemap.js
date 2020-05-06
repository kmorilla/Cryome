function initMap() {
    var uluru = {
        lat: 48.860721,
        lng: 2.337606
    };
    var map = new google.maps.Map(
        document.getElementById('map'), {
        zoom: 16,
        center: uluru,
        streetViewControl: false
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

    if (windowWidth < 576) {
        map.panBy(0, 120);
        map.setZoom(15);
    } else {
        map.panBy(200, 0);
        map.setZoom(15);
    }
}

