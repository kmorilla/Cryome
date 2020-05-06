
function setHeight(windowWidth) {

    //--- services margins ---

    var totalWidth = $(".therapy").outerWidth(true);
    var shortWidth = $(".therapy").outerWidth();
    var marginHeight = (totalWidth - shortWidth);

    var marginTB = { marginTop: marginHeight / 2, marginBottom: marginHeight / 2 };
    var marginLR = { marginLeft: marginHeight, marginRight: marginHeight };

    var marginZeroTB = { marginTop: 0, marginBottom: 0 };
    var marginZeroLR = { marginLeft: 0, marginRight: 0 };

    if (windowWidth > 576) {
        $(".diagonal-stripes-row").css("marginTop", marginHeight);
        $(".therapy").css(marginZeroTB);
        $(".therapy-top").css("marginTop", marginHeight);
    }
    else {
        $(".diagonal-stripes-row").css(marginZeroTB);
        $(".therapy-title-container").css(marginZeroTB);
        $(".therapy").css(marginTB);
    }

    //--- .therapy height ---

    var therapyWidth = $(".therapy").width();

    $(".therapy").height(therapyWidth);


    //--- contact box ---

    var contactWidth = $(".map-info").outerWidth();
    var newLeft = (windowWidth - contactWidth) / 2;

    if (windowWidth < 576) {
        $(".map-info-container").css("left", newLeft);
    }
    else {
        $(".map-info-container").css("left", "55%");
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



