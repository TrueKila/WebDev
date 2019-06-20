$(function() {
    $("div[id*='context-']").hide();
    tab();
});

function toggle(objName) {
    var obj = $(objName),
        blocks = $("div[id*='context-']");

    if (obj.css("display") != "none") {
        obj.animate({ height: 'hide' }, 500);
    } else {
        var visibleBlocks = $("div[id*='context-']:visible");

        if (visibleBlocks.length < 1) {
            obj.animate({ height: 'show' }, 500);
        } else {
            $(visibleBlocks).animate({ height: 'hide' }, 500, function() {
                obj.animate({ height: 'show' }, 500);
            });
        }
    }
}

function tab() {

    $('.tab-title li').not('.active').click(function() {
        var index = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $('.tab-content-li').css('display', 'none').eq(index).css('display', 'block');
    })

    $('.tab-title li:first').addClass('active');
    $('.tab-content-li:first').css('display', 'block');

}