$(function(){ ////////////////// JQB ////////////
    console.log("로딩완료");
        
    // 햄버거 메뉴 on 넣기
    $(".menu_btn").click(function () {
        $("#menu_wrap").toggleClass("on");
        $("#header").toggleClass("on");
    }); ////////// click /////////////
    
    
    // 메뉴 li 오버시 배경 바뀌게
    $(".nav_list li").mouseover(function () {
        var i = $(this).index();
        // console.log(i);

        $("#menu_wrap").css({
            backgroundImage: "url(images/menu" + (i + 1) + ".jpg)"
        })
    }); ////// mouseover //////////

    
}); ////////////////// JQB //////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////