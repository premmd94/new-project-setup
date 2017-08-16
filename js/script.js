$(function(){
    if($(window).width() <= 768){
        $('body').click(function(event){
            
            var x = $('.menu-button a i');
            if($(event.target).is(x)){
                console.log('prem');
                event.preventDefault();
                $('.navbar-collapse').slideToggle(500);
            }
            else{
                $('.navbar-collapse').slideUp(500);
            }
        });
           
    }
});