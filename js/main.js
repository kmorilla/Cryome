
function setHeight() {

    //--- diagonal-stripes ---

    var windowWidth = $(window).width();
    // console.log(windowWidth);

    var boxWidth = $(".box").outerWidth(true);

    if (windowWidth > 751) {
        $(".diagonal-stripes").height(boxWidth * 2);
        $(".diagonal-stripes").width(boxWidth * 2);
    }
    else {
        $(".diagonal-stripes").height(boxWidth);
        $(".diagonal-stripes").width(boxWidth);
    }


    //--- therapy-title ---

    var top = $(".therapy-title").position();
    var product = top.top * -1;
    var therapyItemHeight = $(".therapy-items").innerHeight();
    var diagonalHeight = $(".diagonal-stripes-row").height();
    var total = product + therapyItemHeight + diagonalHeight;

    $(".therapy-title").height(total);

    // console.log("Top position: " + product)
    // console.log("Therapy item height: " + therapyItemHeight)
    // console.log("Diagonal box height: " + diagonalHeight)
    // console.log("Total: " + total)
}

$(document).ready(function () {
    setHeight();
})

$(window).resize(function () {
    setHeight();
})
