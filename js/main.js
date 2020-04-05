
function setHeight() {

    //--- services margins ---

    var totalWidth = $(".box").outerWidth(true);
    var shortWidth = $(".box").width();
    var marginHeight = (totalWidth - shortWidth) / 2;

    var marginTB = { marginTop: marginHeight, marginBottom: marginHeight };
    var marginLR = { marginLeft: marginHeight, marginRight: marginHeight };

    $(".box").css(marginTB);

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

    //--- .box height ---

    var boxWidth = $(".box").width();

    $(".box").height(boxWidth);


    //--- diagonal-stripes ---
    var boxHeight = $(".box").outerHeight(true);

    $(".diagonal-stripes").height(boxHeight * 1.5);
    $(".diagonal-stripes").width(boxHeight * 1.5);
}


$(document).ready(function () {
    setHeight();
})


$(window).resize(function () {
    setHeight();
})