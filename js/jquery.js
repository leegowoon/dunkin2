

$('.ing_btn').mouseover(function(ev){
    ev.preventDefault();
    $('.txt_ing').slideToggle();
    $(this).toggleClass("on");
});

$('.ing_btn').mouseleave(function(ev){
    ev.preventDefault();
    $('.txt_ing').slideToggle();
    $(this).removeClass("on");
});