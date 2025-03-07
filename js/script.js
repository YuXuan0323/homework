
$(document).ready(function(){
    $('.accordion-title').click(function(){
        $(".accordion-content").slideUp();
        $('#accordion-item').slideToggle();
    });
});
