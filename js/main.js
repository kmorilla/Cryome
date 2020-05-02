
function setHeight(windowWidth) {

    //--- services margins ---

    var totalWidth = $(".therapy").outerWidth(true);
    var shortWidth = $(".therapy").outerWidth();
    var marginHeight = (totalWidth - shortWidth) / 2;

    var marginTB = { marginTop: marginHeight, marginBottom: marginHeight };
    var marginLR = { marginLeft: marginHeight, marginRight: marginHeight };

    $(".therapy").css(marginTB);

    var marginZeroTB = { marginTop: 0, marginBottom: 0 };
    var marginZeroLR = { marginLeft: 0, marginRight: 0 };

    if (windowWidth > 576) {
        $(".therapy-title-container").css(marginTB);
        $(".diagonal-stripes").css(marginLR);
        $(".diagonal-stripes").css(marginTB);
        $(".promo-wrap").css(marginLR);
        $(".promo-wrap").css(marginTB);
    }
    else {
        $(".therapy-title-container").css(marginZeroTB);
        $(".diagonal-stripes").css(marginZeroLR);
        $(".diagonal-stripes").css(marginZeroTB);
        $(".promo-wrap").css(marginZeroLR);
        $(".promo-wrap").css(marginZeroTB);
    }

    //--- .therapy height ---

    var therapyWidth = $(".therapy").width();

    $(".therapy").height(therapyWidth);


    //--- diagonal-stripes ---
    var therapyHeight = $(".therapy").outerHeight(true);

    $(".diagonal-stripes").height(therapyHeight * 1.5);
    $(".diagonal-stripes").width(therapyHeight * 1.5);


    //--- cosmetics height ---
    var cosmeticsHeight = $(".cosmetics-wrap").height();

    $(".cosmetics-mask").height(cosmeticsHeight);
}

function findWidth(windowWidth) {
    var mapWidth = $(".map-info").outerWidth();
    var newLeft = ((windowWidth - mapWidth) / 2);

    if (windowWidth < 768) {
        $(".map-info-container").css("left", newLeft);
    } else {
        $(".map-info-container").css("left", "");
    }
}


$(document).ready(function () {
    var windowWidth = $(window).outerWidth();

    setHeight(windowWidth);
    findWidth(windowWidth);
})


$(window).resize(function () {
    var windowWidth = $(window).outerWidth();

    setHeight(windowWidth);
    findWidth(windowWidth);
})



