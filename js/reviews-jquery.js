$(document).ready(function () {
    var $iframe = $('iframe');
    $iframe.on('load', (function () {
        $iframe.contents().find(".col-sm-6").attr("style", "font-size:100px;");
    }));
});