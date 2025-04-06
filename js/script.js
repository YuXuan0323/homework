$(document).ready(function(){
    $('.accordion-item').hide();
    $("input[id^='qa']").on('change', function (event) {
        var target = $(event.target);
        var accordion_item = target.next('label').next('.accordion-item');
        accordion_item.slideToggle();

        if (target.is(':checked')) {
            target.next().addClass('qa-title');
            // label.addClass("qa-title");
        } else {
            target.next().removeClass('qa-title');
            // label.removeClass("qa-title");
        }
    });
});
