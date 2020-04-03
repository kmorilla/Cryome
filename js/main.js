
function setHeight() {

    //--- .box margin ---

    var totalWidth = $(".box").outerWidth(true);
    var shortWidth = $(".box").width();
    var marginHeight = (totalWidth - shortWidth) / 2;

    $(".box").css({ marginTop: marginHeight, marginBottom: marginHeight });

    $(".therapy-title-container").css({ marginTop: marginHeight, marginBottom: marginHeight });


    //--- .box height ---

    var boxWidth = $(".box").width();

    $(".box").height(boxWidth);


    //--- diagonal-stripes ---
    var boxHeight = $(".box").outerHeight(true);

    console.log(boxHeight);


    $(".diagonal-stripes").height(boxHeight * 1.6);
    $(".diagonal-stripes").width(boxHeight * 1.6);
}

$(document).ready(function () {
    setHeight();
})

$(window).resize(function () {
    setHeight();
})