$(function(){
    console.log("Let’s get ready to party with jQuery!");
})
$('article img').addClass('image-center');
$('article p:last').remove();
$('title').css("font-size",`${Math.random()*100}px`);
//console.log($('#title').css("font-size",`${Math.random()*100}px`));
$('ol').append('<li>Added an item to the list.</li>');
$('aside').empty().append('<p>Apologize for the list’s existence. That was silly!</p>');


$('input').on('change keyup blur',function(){
    let r = $('.form-control').eq(0).val();
    let b = $('.form-control').eq(1).val();
    let g = $('.form-control').eq(2).val();
    $('body').css('background-color',`rgb(${r},${g},${b})`);
});

$('img').on("click",function(){
    $(this).remove();
});

