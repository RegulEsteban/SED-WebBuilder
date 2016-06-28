var offset = 300,
    offset_opacity = 1200,
    scroll_top_duration = 700,
    link_to_top_duration = 0,
    $back_to_top = $(".cd-top"),
    $scroll_to_top_sp = $("#socarpIcon"),
    $scroll_to_top_be = $("#berakaelIcon"),
    $scroll_to_top_bu = $("#buzIcon"),
    $scroll_to_top_en = $("#encoreIcon"),
    $scroll_to_top_th = $("#thesisIcon");
$back_to_top.on("click", function(e) {
    e.preventDefault(), $(".boxInner").animate({
        scrollTop: 0
    }, scroll_top_duration)
}), $scroll_to_top_sp.on("click", function(e) {
    e.preventDefault(), $(".boxInner").animate({
        scrollTop: 0
    }, link_to_top_duration)
}), $scroll_to_top_be.on("click", function(e) {
    e.preventDefault(), $(".boxInner").animate({
        scrollTop: 0
    }, link_to_top_duration)
}), $scroll_to_top_bu.on("click", function(e) {
    e.preventDefault(), $(".boxInner").animate({
        scrollTop: 0
    }, link_to_top_duration)
}), $scroll_to_top_en.on("click", function(e) {
    e.preventDefault(), $(".boxInner").animate({
        scrollTop: 0
    }, link_to_top_duration)
}), $scroll_to_top_th.on("click", function(e) {
    e.preventDefault(), $(".boxInner").animate({
        scrollTop: 0
    }, link_to_top_duration)
});