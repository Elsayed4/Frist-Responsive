/*global console*/
$(function(){
    
   var winh =$(window).height(),
       navh =$(".navbar").innerHeight(),
       upperh =$(".upper-bar").innerHeight();
    
    $('.slider').height(winh - (navh + upperh));
    $('.carousel-item').height(winh - (navh + upperh));

    $(".featured-work ul li").click(function(){
       $(this).addClass("active").siblings().removeClass("active"); 

    
       if($(this).data('class') === '.all'){
           $(".shfelling .shfell").css("opacity","1");
           
       } else {
           $(".shfelling .shfell").css("opacity",".08");
           $($(this).data("class")).parent().css("opacity","1");
       }
        
    });
    
    //////////////////////////////////////////////////////
    
});