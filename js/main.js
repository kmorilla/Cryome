
function setHeight() {

    //--- services margins ---

    var totalWidth = $(".therapy").outerWidth(true);
    var shortWidth = $(".therapy").width();
    var marginHeight = (totalWidth - shortWidth) / 2;

    var marginTB = { marginTop: marginHeight, marginBottom: marginHeight };
    var marginLR = { marginLeft: marginHeight, marginRight: marginHeight };

    $(".therapy").css(marginTB);

    var windowWidth = $(window).outerWidth();
    var marginZeroTB = { marginTop: 0, marginBottom: 0 };
    var marginZeroLR = { marginLeft: 0, marginRight: 0 };

    if (windowWidth > 576) {
        $(".therapy-title-container").css(marginTB);
        $(".diagonal-stripes").css(marginLR);
        $(".diagonal-stripes").css(marginTB);
    }
    else {
        $(".therapy-title-container").css(marginZeroTB);
        $(".diagonal-stripes").css(marginZeroLR);
        $(".diagonal-stripes").css(marginZeroTB);
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


$(document).ready(function () {
    setHeight();
})


$(window).resize(function () {
    setHeight();
})



