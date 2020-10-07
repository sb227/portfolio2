$(function () { ////////////////// JQB ////////////
    console.log("로딩완료");
    
    // $("#wrap").smoothWheel();
    
    // 왼쪽 이미지 넣기
    for (var i = 1; i < 6; i++) {
        $(".show_list").append("<li><img src='images/show/hendrix_mandarincrystal_dt_0" + i + ".jpg'></li>")
    } ////////// for /////////////////

    // 상세 정보 클릭시
    $(".show_info div").hide();
    $(".show_info li").click(function () {
        $(this).find("div").slideToggle();
        $(this).css({
            height: "100%"
        }); /////// css ////////
        $(this).toggleClass("on");
    }); //////////// click /////////////////////

    // 하트 토글
    $(".heart").click(function(){
        $(this).toggleClass("on");
    }); ///// click //////////   
    
    
    // 위치갭(이전,이후)
    var gap = 200;

    ////// scroll 셋팅 ///////////
    $(window).scroll(function () {
        var scTop = $(this).scrollTop();
        console.log("스위:" + scTop);

        // 왼쪽 높이 구하기
        var lpos = $(".show_list").height();
        console.log(lpos);
        
        // 로고 기준선 액션 ///
        if (scTop > lpos - gap * 2) {
            console.log("하이하이");
            $("#show_right").css({
                top:scTop
            }); //////// css ////////////
        } /////// if ///////////
    }); /////////// 스크롤 ////////////



}); ////////////////////////////////////////////
///////////////////JQB  ////////////////////////
///////////////////////////////////////////////
