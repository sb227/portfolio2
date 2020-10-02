$(function(){ ////////////////// JQB ////////////
    console.log("로딩완료");
        
    for(var i=1;i<6;i++){
        $(".show_list").append("<li><img src='images/show/hendrix_mandarincrystal_dt_0"+i+".jpg'></li>")
    } ////////// for /////////////////
    
    $(".show_info div").hide();
    $(".show_info li").click(function(){
        $(".show_info div").slideToggle();
        $(this).css({
            height:"100%"
        }); /////// css ////////
    }); //////////// click /////////////////////
    
}); ////////////////////////////////////////////
///////////////////JQB  ////////////////////////
///////////////////////////////////////////////