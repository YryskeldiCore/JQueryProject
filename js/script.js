$(document).ready(function(){

    $('.main_btna, a[href="#sheldure"]').click(function(){
        $('.overlay').fadeIn(2000);
        $('.modal').slideDown(2000);
    });

    $('.close').click(function(){
        $('.modal').slideUp(2000);
        $('.overlay').fadeOut(2000);
    });

});